import React, { useState } from 'react';
import { listaProjetos } from './data/projetos'; // O arquivo que você mandou
import styles from './Projetos.module.css';

// Sub-componente para o Card
const CardProjeto = ({ projeto, aoAbrirDetalhes }) => {
  const [fotoAtual, setFotoAtual] = useState(0);

  const proximaFoto = (e) => {
    e.stopPropagation(); // Impede de abrir o modal ao clicar na seta
    setFotoAtual((prev) => (prev + 1 === projeto.imagens.length ? 0 : prev + 1));
  };

  return (
    <div className={styles.card} onClick={() => aoAbrirDetalhes(projeto)}>
      <div className={styles.areaImagem}>
        <img src={projeto.imagens[fotoAtual]} alt={projeto.titulo} className={styles.capa} />
        {projeto.imagens.length > 1 && (
          <button className={styles.setaCard} onClick={proximaFoto}>❯</button>
        )}
      </div>
      <div className={styles.corpo}>
        <h3>{projeto.titulo}</h3>
        
        {/* AQUI RESOLVE AS TAGS GRUDADAS NO CARD */}
        <div className={styles.tags}>
          {projeto.tecnologias.map(t => (
            <span key={t} className={styles.tagItem}>{t}</span>
          ))}
        </div>
        
        <button className={styles.btnDetalhes}>Ver Detalhes</button>
      </div>
    </div>
  );
};

// Componente Principal
export default function Projetos() {
  const [projetoAtivo, setProjetoAtivo] = useState(null);

  return (
    <section className={styles.secaoProjetos} id="projetos">
      <h2 className={styles.tituloGeral}>Projetos em Destaque</h2>
      
      <div className={styles.grid}>
        {listaProjetos.map(p => (
          <CardProjeto key={p.id} projeto={p} aoAbrirDetalhes={setProjetoAtivo} />
        ))}
      </div>

      {/* MODAL DE DETALHES (Requisito de detalhamento) */}
      {projetoAtivo && (
        <div className={styles.modalOverlay} onClick={() => setProjetoAtivo(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.fechar} onClick={() => setProjetoAtivo(null)}>×</button>
            
            <img src={projetoAtivo.imagens[0]} alt={projetoAtivo.titulo} className={styles.imgModal} />
            
            <div className={styles.detalhesTexto}>
              <h3>{projetoAtivo.titulo}</h3>
              
              {/* TAGS DENTRO DO MODAL TAMBÉM SEPARADAS */}
              <div className={styles.modalTags}>
                {projetoAtivo.tecnologias.map(t => (
                  <span key={t} className={styles.tagItemModal}>{t}</span>
                ))}
              </div>

              <p>{projetoAtivo.descricao}</p>
              
              <a href={projetoAtivo.linkGithub} target="_blank" rel="noreferrer" className={styles.btnRepo}>
                Ver Repositório no GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}