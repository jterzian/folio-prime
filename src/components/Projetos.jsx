import { useState } from 'react';
import styles from './Projetos.module.css';
import imgAgencia from '../assets/projects/agencia/agencia-criativa-home.jpg';
import imgPet from '../assets/projects/Pet&Style/pet$style-home.jpg';
import imgReact from '../assets/projects/React Avançado/React-avançado-funcionalidades.jpg';

export default function Projetos() {
  const [projetoAtivo, setProjetoAtivo] = useState(null);

  const meusProjetos = [
    {
      id: 1,
      titulo: "Agência Criativa",
      resumo: "Landing page desenvolvida para agências de marketing, focada em uma interface moderna e carregamento otimizado.",
      techs: ["React", "CSS Modules"],
      imagem: imgAgencia,
      link: "https://github.com/jterzian/agencia-criativa"
    },
    {
      id: 2,
      titulo: "Pet & Style",
      resumo: "E-commerce/Vitrine para Petshops. Conta com layout responsivo para mobile e organização de serviços.",
      techs: ["JavaScript", "HTML/CSS"],
      imagem: imgPet,
      link: "https://github.com/jterzian/petstyle-loja-virtual"
    },
    {
      id: 3,
      titulo: "React Pro (To-do)",
      resumo: "Aplicação de gerenciamento de tarefas avançada, utilizando hooks para persistência de dados e filtros dinâmicos.",
      techs: ["React", "Hooks"],
      imagem: imgReact,
      link: "https://github.com/jterzian/todo-react-pro"
    }
  ];

  return (
    <section className={styles.projetos} id="projetos">
      <h2 className={styles.tituloSecao}>Projetos em Destaque</h2>
      <div className={styles.grid}>
        {meusProjetos.map((proj) => (
          <div key={proj.id} className={styles.card}>
            <div className={styles.containerImagem}>
              <img src={proj.imagem} alt={proj.titulo} className={styles.capa} />
            </div>
            <div className={styles.info}>
              <h3>{proj.titulo}</h3>
              <div className={styles.tags}>
                {proj.techs.map(t => <span key={t}>{t}</span>)}
              </div>
              <button 
                onClick={() => setProjetoAtivo(proj)} 
                className={styles.btnRepo}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE DETALHES */}
      {projetoAtivo && (
        <div className={styles.modalOverlay} onClick={() => setProjetoAtivo(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.fechar} onClick={() => setProjetoAtivo(null)}>X</button>
            <img src={projetoAtivo.imagem} alt={projetoAtivo.titulo} />
            <div className={styles.detalhesTexto}>
              <h3>{projetoAtivo.titulo}</h3>
              <p>{projetoAtivo.resumo}</p>
              <div className={styles.botoesModal}>
                <a href={projetoAtivo.link} target="_blank" rel="noreferrer" className={styles.btnLinkReal}>
                  Acessar Repositório
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}