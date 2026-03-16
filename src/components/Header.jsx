import styles from './Header.module.css';

/**
 * Componente de Navegação Principal.
 * Utiliza âncoras internas (#) para scroll suave na Single Page Application (SPA).
 */
export default function Header() {
  return (
    <header className={styles.header}>
      {/* Branding do portfólio */}
      <div className={styles.logo}>
        <span>João</span>Terzian
      </div>

      <nav>
        <ul className={styles.navList}>
          {/* Links de navegação ancorados aos IDs das seções no App.jsx */}
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato" className={styles.btnContato}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}