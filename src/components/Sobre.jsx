import styles from './Sobre.module.css';
// Importação da imagem de perfil tratada como um módulo para garantir o hash correto no build final
import fotoPerfil from '../assets/projects/perfil.jpg'; 

/**
 * Componente Sobre Mim.
 * Apresenta o perfil profissional, combinando experiência em Infraestrutura com desenvolvimento Front-end.
 */
export default function Sobre() {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.container}>
        
        {/* Área da imagem com tratamento via CSS para garantir responsividade e estilo do projeto */}
        <div className={styles.fotoArea}>
          <img src={fotoPerfil} alt="Foto de João Terzian" className={styles.foto} />
        </div>

        <div className={styles.textoArea}>
          <h2>Sobre Mim</h2>
          
          <p>
            Olá! Sou o <strong>João Terzian</strong>. Atualmente, trabalho na área de <strong>Infraestrutura e Tecnologia</strong>, o que me deu uma base sólida sobre como sistemas e redes operam no dia a dia.
          </p>
          
          <p>
            Estou expandindo meus horizontes para o desenvolvimento Front-end, unindo minha bagagem técnica de infra com a criação de interfaces modernas e eficientes usando React.
          </p>

          {/* Links sociais redundantes para facilitar o acesso (UX) e atender aos requisitos de contato */}
          <div className={styles.sociais}>
            <a href="https://github.com/jterzian" target="_blank" rel="noreferrer" className={styles.btnSocial}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/joaoterzian/" target="_blank" rel="noreferrer" className={styles.btnSocial}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}