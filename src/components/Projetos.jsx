import styles from './Projetos.module.css';

// Importando as imagens usando os nomes exatos das suas pastas
import imgAgencia from '../assets/projects/agencia/agencia-criativa-home.jpg';
import imgPetStyle from '../assets/projects/Pet&Style/pet$style-home.jpg';
import imgReact from '../assets/projects/React Avançado/React-avançado-funcionalidades.jpg';

const meusProjetos = [
  {
    id: 1,
    titulo: "Agência Criativa",
    desc: "Landing page moderna com foco em conversão e design minimalista.",
    imagem: imgAgencia,
    tech: ["React", "CSS Modules"]
  },
  {
    id: 2,
    titulo: "Pet & Style",
    desc: "E-commerce completo para pets com sistema de agendamento.",
    imagem: imgPetStyle,
    tech: ["React", "Styled Components"]
  },
  {
    id: 3,
    titulo: "Task Master Pro",
    desc: "Gerenciador de tarefas avançado com filtros e persistência.",
    imagem: imgReact,
    tech: ["React", "TypeScript"]
  }
];

export default function Projetos() {
  return (
    <section className={styles.projetos} id="projetos">
      <h2 className={styles.tituloSecao}>Projetos em Destaque</h2>
      <div className={styles.grid}>
        {meusProjetos.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.containerImg}>
               <img src={p.imagem} alt={p.titulo} className={styles.imagem} />
            </div>
            <div className={styles.info}>
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
              <div className={styles.tags}>
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}