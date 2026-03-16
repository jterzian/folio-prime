import { useParams } from 'react-router-dom';
import { listaProjetos } from './data/projetos'; 
import styles from './ProjetoDetalhes.module.css';

/**
 * Componente de Página de Detalhes.
 * Utiliza o Hook useParams para capturar o ID da URL e renderizar o conteúdo dinamicamente.
 */
export default function ProjetoDetalhes() {
  // Captura o parâmetro ID vindo da rota (ex: /projeto/1)
  const { id } = useParams();
  
  // Lógica de busca: Converte o ID da URL para Number e filtra a lista de dados
  const projeto = listaProjetos.find(p => p.id === Number(id));

  // Early return: Caso o usuário digite um ID inexistente na URL
  if (!projeto) return <div className={styles.erro}>Projeto não encontrado!</div>;

  return (
    <section className={styles.container}>
      <header className={styles.headerDetalhes}>
        <h1>{projeto.titulo}</h1>
      </header>

      {/* Galeria de imagens do projeto mapeada do arquivo de dados */}
      <div className={styles.galeria}>
        {projeto.imagens.map((img, index) => (
          <img key={index} src={img} alt={`Captura de tela ${index + 1} do projeto ${projeto.titulo}`} />
        ))}
      </div>

      <article className={styles.conteudo}>
        <h3>Sobre o projeto</h3>
        <p>{projeto.descricao}</p>
        
        <div className={styles.tecnologias}>
          {projeto.tecnologias.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>

        <a href={projeto.linkGithub} target="_blank" rel="noreferrer" className={styles.btnRepo}>
          Ver código no GitHub
        </a>
      </article>
    </section>
  );
}