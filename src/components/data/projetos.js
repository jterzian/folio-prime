import imgAgencia1 from '../../assets/projects/agencia/agencia-criativa-home.jpg';
import imgAgencia2 from '../../assets/projects/agencia/agencia-criativa-sobre-nos.jpg';
import imgAgencia3 from '../../assets/projects/agencia/agencia-criativa-depoimentos.jpg';

import petHome from '../../assets/projects/Pet&Style/petstyle-home.jpg';
import petDestaques from '../../assets/projects/Pet&Style/petstyle-destaques-da-semana.jpg';
import petDepoimentos from '../../assets/projects/Pet&Style/petstyle-depoimentos-contato.jpg';

import reactFuncional from '../../assets/projects/React Avançado/react-avancado-funcionalidades.jpg';
import reactFeitas from '../../assets/projects/React Avançado/react-avancado-funcionalidades-feitas.jpg';
// Lembre-se de renomear esse arquivo na pasta para pendentes.jpg se der erro!
import reactPendentes from '../../assets/projects/React Avançado/pendentes.jpg';

export const listaProjetos = [
  {
    id: 1,
    titulo: "Agência Criativa",
    resumo: "Landing page de alta performance.",
    descricao: "Desenvolvida com foco em conversão e design minimalista, utilizando React e CSS Modules.",
    tecnologias: ["React", "CSS Modules"],
    imagens: [imgAgencia1, imgAgencia2, imgAgencia3],
    linkGithub: "https://github.com/jterzian/agencia-criativa"
  },
  {
    id: 2,
    titulo: "Pet & Style",
    resumo: "E-commerce para petshops.",
    descricao: "Sistema de agendamento e vitrine de produtos com interface amigável.",
    tecnologias: ["React", "Styled Components"],
    imagens: [petHome, petDestaques, petDepoimentos],
    linkGithub: "https://github.com/jterzian/petstyle-loja-virtual"
  },
  {
    id: 3,
    titulo: "React Avançado",
    resumo: "Plataforma de gestão.",
    descricao: "Gestão de estado complexa e performance otimizada com Hooks e Context API.",
    tecnologias: ["React", "Hooks"],
    imagens: [reactFuncional, reactFeitas, reactPendentes],
    linkGithub: "https://github.com/jterzian/todo-react-pro"
  }
];