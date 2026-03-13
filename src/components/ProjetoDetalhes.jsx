import { useParams, Link } from 'react-router-dom';
import { listaProjetos } from './data/projetos';
import styles from './ProjetoDetalhes.module.css';

export default function ProjetoDetalhes() {
  const { id } = useParams();
  const projeto = listaProjetos.find((p) => p.id === id);

  if (!projeto) {
    return <div style={{padding: '150px', color: 'white'}}>Projeto não encontrado!</div>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.voltar}>← Voltar para Home</Link>
      
      <div className={styles.conteudo}>
        <img src={projeto.capa} alt={projeto.titulo} className={styles.capa} />
        
        <div className={styles.texto}>
          <h1>{projeto.titulo}</h1>
          <div className={styles.tags}>
            {projeto.tecnologias.map(t => <span key={t}>{t}</span>)}
          </div>
          <p>{projeto.descricao}</p>
          
          <div className={styles.acoes}>
            <a href={projeto.linkDeploy} target="_blank" rel="noreferrer" className={styles.btnPrincipal}>
              Visualizar Site
            </a>
            <a href={projeto.linkGithub} target="_blank" rel="noreferrer" className={styles.btnSecundario}>
              Código no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}