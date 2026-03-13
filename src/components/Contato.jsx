import styles from './Contato.module.css';

export default function Contato() {
  return (
    <footer className={styles.contato} id="contato">
      <div className={styles.container}>
        <h2>Vamos conversar?</h2>
        <p>Estou disponível para novos projetos e colaborações.</p>
        
        <div className={styles.links}>
          <a href="mailto:seuemail@exemplo.com" className={styles.btnContato}>E-mail</a>
          <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noreferrer" className={styles.btnContato}>LinkedIn</a>
          <a href="https://github.com/jterzian" target="_blank" rel="noreferrer" className={styles.btnContato}>GitHub</a>
        </div>
        
        <div className={styles.copy}>
          <p>&copy; 2024 João Terzian. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}