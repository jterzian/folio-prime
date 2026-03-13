import styles from './Skills.module.css';

export default function Skills() {
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
      <h2 className={styles.tituloSecao}>Habilidades Técnicas</h2>
      <div className={styles.grid}>
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