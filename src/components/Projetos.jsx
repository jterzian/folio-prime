import { Link } from 'react-router-dom';
import { listaProjetos } from './data/projetos'; 
import styles from './Projetos.module.css';

export default function Projetos() {
  return (
    <section className={styles.projetos} id="projetos">
      <h2 className={styles.tituloSecao}>Projetos em Destaque</h2>
      <div className={styles.grid}>
        {listaProjetos.map((p) => (
          <Link to={`/projeto/${p.id}`} key={p.id} className={styles.linkCard}>
            <div className={styles.card}>
              <div className={styles.containerImg}>
                <img src={p.capa} alt={p.titulo} className={styles.imagem} />
              </div>
              <div className={styles.info}>
                <h3>{p.titulo}</h3>
                <p>{p.resumo}</p>
                <div className={styles.tags}>
                  {p.tecnologias.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}