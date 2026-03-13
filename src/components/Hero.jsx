import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.conteudo}>
        <h1 className={styles.titulo}>
          Criando <span className={styles.textoDestaque}>experiências visuais</span> e soluções de infraestrutura.
        </h1>
        <p className={styles.subtitulo}>
          Desenvolvedor Front-end & Especialista em Infraestrutura de TI.
        </p>
        <div className={styles.acoes}>
          <a href="#projetos" className={styles.btnPrincipal}>Ver Projetos</a>
          <a href="#contato" className={styles.btnSecundario}>Entrar em contato</a>
        </div>
      </div>
    </section>
  );
}