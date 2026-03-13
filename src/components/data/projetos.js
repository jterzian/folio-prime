import imgAgencia from '../../assets/projects/agencia/agencia-criativa-home.jpg';
import imgPetStyle from '../../assets/projects/Pet&Style/pet$style-home.jpg';
import imgReact from '../../assets/projects/React Avançado/React-avançado-funcionalidades.jpg';

// O segredo está nessa palavra "export" antes do const
export const listaProjetos = [
  {
    id: "agencia-criativa",
    titulo: "Agência Criativa",
    capa: imgAgencia,
    resumo: "Uma landing page de alta performance.",
    descricao: "Desenvolvida com foco em conversão e design minimalista.",
    tecnologias: ["React", "CSS Modules"],
    linkGithub: "#",
    linkDeploy: "#"
  },
  {
    id: "pet-style",
    titulo: "Pet & Style",
    capa: imgPetStyle,
    resumo: "E-commerce para petshops.",
    descricao: "Sistema de agendamento e vitrine de produtos.",
    tecnologias: ["React", "Styled Components"],
    linkGithub: "#",
    linkDeploy: "#"
  },
  {
    id: "react-avancado",
    titulo: "React Avançado",
    capa: imgReact,
    resumo: "Plataforma de estudos.",
    descricao: "Gestão de estado complexa e performance otimizada.",
    tecnologias: ["React", "Hooks"],
    linkGithub: "#",
    linkDeploy: "#"
  }
];