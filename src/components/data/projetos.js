import imgAgencia1 from '../../assets/projects/agencia/agencia-criativa-home.jpg';
import imgAgencia2 from '../../assets/projects/agencia/agencia-criativa-sobre-nos.jpg';
import imgAgencia3 from '../../assets/projects/agencia/agencia-criativa-depoimentos.jpg';

import petHome from '../../assets/projects/Pet&Style/petstyle-home.jpg';
import petDestaques from '../../assets/projects/Pet&Style/petstyle-destaques-da-semana.jpg';
import petDepoimentos from '../../assets/projects/Pet&Style/petstyle-depoimentos-contato.jpg';

import reactFuncional from '../../assets/projects/React Avançado/react-avancado-funcionalidades.jpg';
import reactFeitas from '../../assets/projects/React Avançado/react-avancado-funcionalidades-feitas.jpg';
import reactPendentes from '../../assets/projects/React Avançado/pendentes.jpg';

export const listaProjetos = [
  {
    id: 1,
    titulo: "Agência Criativa",
    resumo: "Landing Page moderna com foco em UX/UI e performance.",
    descricao: "Desenvolvimento de uma interface de alto impacto visual para agências de marketing. O foco principal foi a criação de componentes modulares e reutilizáveis, garantindo que o código seja fácil de manter. Utilizei CSS Modules para evitar conflitos de estilo e garantir um design limpo e responsivo que se adapta a qualquer navegador.",
    tecnologias: ["React", "CSS Modules", "Hooks"],
    imagens: [imgAgencia1, imgAgencia2, imgAgencia3],
    linkGithub: "https://github.com/jterzian/agencia-creativa"
  },
  {
    id: 2,
    titulo: "Pet & Style",
    resumo: "E-commerce completo focado no setor de Petshops.",
    descricao: "Neste projeto, simulei uma experiência real de compra e agendamento para petshops. Trabalhei intensamente na manipulação de estados para exibir dinamicamente os destaques da semana e depoimentos de clientes. O design segue uma linha moderna, com componentes estilizados que priorizam a facilidade de navegação do usuário final.",
    tecnologias: ["React", "Styled Components", "State Management"],
    imagens: [petHome, petDestaques, petDepoimentos],
    linkGithub: "https://github.com/jterzian/petstyle-loja-virtual"
  },
  {
    id: 3,
    titulo: "React Avançado",
    resumo: "Dashboard de gestão para controle de fluxo de trabalho.",
    descricao: "Este é o projeto mais técnico da lista. Foquei na implementação de funcionalidades complexas do React, como o uso de Context API para gerenciar o estado global da aplicação. O sistema conta com filtros inteligentes para tarefas pendentes e concluídas, persistência de dados no Local Storage e uma arquitetura de pastas otimizada para escalabilidade.",
    tecnologias: ["React", "Context API", "Local Storage"],
    imagens: [reactFuncional, reactFeitas, reactPendentes],
    linkGithub: "https://github.com/jterzian/todo-react-pro"
  }
]