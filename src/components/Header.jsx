import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Seu</span>Nome
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato" className={styles.btnContato}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}