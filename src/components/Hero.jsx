import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="sobre">
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          Transformando lógica em <span className={styles.destaque}>experiências visuais.</span>
        </h1>
        <p className={styles.subtitulo}>
          Especialista em <strong>React</strong> e focado em escrever código limpo e escalável.
        </p>
        <div className={styles.botoes}>
          <a href="#projetos" className={styles.btnPrincipal}>Ver Projetos</a>
          <a href="#contato" className={styles.btnSecundario}>Entrar em contato</a>
        </div>
      </div>
    </section>
  );
}