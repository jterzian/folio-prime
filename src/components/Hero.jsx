import styles from './Hero.module.css';

/**
 * Componente Hero (Seção de Boas-vindas).
 * Responsável pela primeira impressão do usuário, apresentando o "Value Proposition" (Proposta de Valor).
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.conteudo}>
        {/* Título principal com destaque semântico para SEO e UX */}
        <h1 className={styles.titulo}>
          Criando <span className={styles.textoDestaque}>experiências visuais</span> e soluções de infraestrutura.
        </h1>
        
        {/* Descrição curta e objetiva do perfil profissional */}
        <p className={styles.subtitulo}>
          Desenvolvedor Front-end & Analista em Infraestrutura de TI.
        </p>
        
        {/* CTAs (Call to Action) - Direcionam o usuário para as partes principais do portfólio */}
        <div className={styles.acoes}>
          <a href="#projetos" className={styles.btnPrincipal}>Ver Projetos</a>
          <a href="#contato" className={styles.btnSecundario}>Entrar em contato</a>
        </div>
      </div>
    </section>
  );
}