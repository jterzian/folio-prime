import Header from './components/Header';
import Hero from './components/Hero';
import Projetos from './components/Projetos'; // Adicione essa linha
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <Hero />
        <Projetos /> {/* Adicione essa linha aqui */}
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
        <p>© 2026 - Portfólio Profissional</p>
      </footer>
    </div>
  );
}

export default App;