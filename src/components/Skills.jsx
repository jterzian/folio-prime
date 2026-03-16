import styles from './Skills.module.css';

/**
 * Componente de Habilidades (Skills).
 * Apresenta o conjunto de competências técnicas unindo Front-end e Infraestrutura.
 */
export default function Skills() {
  // Array de objetos contendo as habilidades para facilitar a iteração via .map()
  const habilidades = [
    { nome: "React", descricao: "Desenvolvimento de Interfaces" },
    { nome: "JavaScript", descricao: "Lógica e Componentização" },
    { nome: "Infraestrutura", descricao: "Sistemas e Operações" },
    { nome: "CSS Modules", descricao: "Estilização Moderna" },
    { nome: "Redes & Tech", descricao: "Suporte e Manutenção" },
    { nome: "Git", descricao: "Controle de Versão" }
  ];

  return (
    <section className={styles.skills} id="skills">
      {/* Título da seção referenciado pelo ID para navegação interna */}
      <h2 className={styles.tituloSecao}>Habilidades Técnicas</h2>
      
      <div className={styles.grid}>
        {/* Renderização dinâmica dos cards de habilidades */}
        {habilidades.map((s) => (
          <div key={s.nome} className={styles.card}>
            <h3>{s.nome}</h3>
            <p>{s.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}