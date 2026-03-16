import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importação do componente raiz que orquestra a aplicação
import './index.css';     // Estilos globais (reset, fontes e variáveis de cor)

/**
 * Ponto de entrada principal do React 18.
 * Seleciona o elemento 'root' no index.html e renderiza a árvore de componentes.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  /**
   * React.StrictMode: Ajuda a identificar práticas inseguras ou 
   * componentes obsoletos durante o desenvolvimento.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);