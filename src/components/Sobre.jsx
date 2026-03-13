import styles from './Sobre.module.css';
import fotoPerfil from '../assets/projects/perfil.jpg'; 

export default function Sobre() {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.container}>
        <div className={styles.fotoArea}>
          <img src={fotoPerfil} alt="João Terzian" className={styles.foto} />
        </div>
        <div className={styles.textoArea}>
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou o <strong>João Terzian</strong>. Atualmente, trabalho na área de <strong>Infraestrutura e Tecnologia</strong>, o que me deu uma base sólida sobre como sistemas e redes operam no dia a dia.
          </p>
          <p>
            Estou expandindo meus horizontes para o desenvolvimento Front-end, unindo minha bagagem técnica de infra com a criação de interfaces modernas e eficientes usando React.
          </p>
          <div className={styles.sociais}>
            <a href="https://github.com/jterzian" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/joaoterzian/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}