import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Skills from './components/Skills'; 
import Projetos from './components/Projetos';
import ProjetoDetalhes from './components/ProjetoDetalhes';
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
      <div className="App">
        <Header />
        
        <Routes>
          {/* Rota principal: Home */}
          <Route path="/" element={<Home />} />
          
          {/* Rota dinâmica para os detalhes de cada projeto */}
          <Route path="/projeto/:id" element={<ProjetoDetalhes />} />
        </Routes>

        <footer style={{ 
          textAlign: 'center', 
          padding: '60px 20px', 
          backgroundColor: '#1a1a1a', 
          color: '#ffffff',
          marginTop: 'auto'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '10px' }}>
            João Terzian | Infraestrutura & Tecnologia
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.7' }}>
            © 2026 - Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;