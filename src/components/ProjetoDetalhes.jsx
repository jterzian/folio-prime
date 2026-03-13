import { useParams } from 'react-router-dom';
import { listaProjetos } from './data/projetos'; // Importando a lista que limpamos
import styles from './ProjetoDetalhes.module.css';

export default function ProjetoDetalhes() {
  const { id } = useParams();
  
  // Encontra o projeto pelo ID (que agora é número 1, 2 ou 3)
  const projeto = listaProjetos.find(p => p.id === Number(id));

  if (!projeto) return <div>Projeto não encontrado!</div>;

  return (
    <div className={styles.container}>
      <h1>{projeto.titulo}</h1>
      <div className={styles.galeria}>
        {projeto.imagens.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} />
        ))}
      </div>
      <p>{projeto.descricao}</p>
      {/* ... links para github ... */}
    </div>
  );
}