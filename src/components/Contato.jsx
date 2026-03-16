import styles from './Contato.module.css';

/**
 * Componente de Rodapé/Contato.
 * Contém links externos e informações de copyright.
 */
export default function Contato() {
  return (
    <footer className={styles.contato} id="contato">
      <div className={styles.container}>
        <h2>Vamos conversar?</h2>
        <p>Estou disponível para novos projetos e colaborações.</p>
        
        {/* Grupos de botões de redes sociais com segurança rel="noreferrer" */}
        <div className={styles.links}>
          <a href="mailto:joaovictorterzian@gmail.com" className={styles.btnContato}>E-mail</a>
          <a href="https://www.linkedin.com/in/joaoterzian/" target="_blank" rel="noreferrer" className={styles.btnContato}>LinkedIn</a>
          <a href="https://github.com/jterzian" target="_blank" rel="noreferrer" className={styles.btnContato}>GitHub</a>
        </div>
        
        <div className={styles.copy}>
          <p>&copy; 2026 João Terzian. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}