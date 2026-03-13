import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Skills from './components/Skills'; 
import Projetos from './components/Projetos';
import ProjetoDetalhes from './components/ProjetoDetalhes';
import Contato from './components/Contato'; // 1. Importando o novo componente
import './index.css';

// Componente para organizar a Página Inicial (Home)
const Home = () => (
  <>
    <Hero />
    <Sobre />
    <Skills />
    <Projetos />
  </>
);

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Rota principal: Home */}
            <Route path="/" element={<Home />} />
            
            {/* Rota dinâmica para os detalhes de cada projeto */}
            <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
          </Routes>
        </main>

        {/* 2. Substituímos o footer antigo pelo seu novo componente Contato */}
        <Contato /> 
      </div>
    </Router>
  );
}

export default App;