import {
  aws,
  code,
  docker,
  iconCss3,
  js,
  nextjs,
  clonSpotify,
  python,
  reactjs,
  sass,
  SaaScribeNotes,
  realtimeChat,
  githubLikeApp,
  github,
  instagram,
  twitter,
  linkedin,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skill",
  },
  {
    id: "3",
    title: "Experience",
    url: "#roadmap",
  },
];

export const skillsText =
  "con estas herramientas he realizado la mayor parte de proyectos, continuamente me estoy actualizando en nuevas tecnologias";

export const skillsDescription = [
  {
    id: "0",
    title: "Desarrollo Frontend",
    text: "React, NextJS, TailwindCSS, Styled Components, Framer Motion, Material UI",
  },
  {
    id: "1",
    title: "Desarrollo Backend",
    text: "NodeJS, Express, MongoDB, GraphQL",
  },
  {
    id: "2",
    title: "CI/CD",
    text: "Github Actions, Docker, AWS",
  },
];

export const SkillsIcon = [
  {
    id: "0",
    title: "Css3",
    icon: iconCss3,
    width: 44,
    height: 44,
  },
  {
    id: "1",
    title: "JavaScript",
    icon: js,
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "React",
    icon: reactjs,
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "docker",
    icon: docker,
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "python",
    icon: python,
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "NextJS",
    icon: nextjs,
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Sass",
    icon: sass,
    width: 36,
    height: 36,
  },
  {
    id: "7",
    title: "AWS",
    icon: aws,
    width: 36,
    height: 36,
  },
];

export const heroFloats = [code, js, docker, python];

export const projects = [
  {
    id: "0",
    title: "Clon Spotify",
    text: "Clon de Spotify realizado en forma de practica en mis tiempos libres",
    url: "https://github.com/codigo-natural/Cool-Clon-Spotify",
    imageUrl: clonSpotify,
  },
  {
    id: "1",
    title: "SasScribe Notes",
    text: "Software as a Service(Saas) - aplicacion para crear notas, manejando suscripcion con stripe",
    url: "https://github.com/codigo-natural/SaaScribe-Saas-platform",
    imageUrl: SaaScribeNotes,
  },
  {
    id: "2",
    title: "Real time chat app",
    text: "Real time chat app with socket.io, use mongoDB for save user logued in the app",
    url: "https://github.com/codigo-natural/Real-time-chat-app",
    imageUrl: realtimeChat,
  },
  {
    id: "3",
    title: "Github Like App",
    text: "esta aplicacion la construi haciendo uso de la api de github creando un diseño moderno",
    url: "https://github.com/codigo-natural/Github-like-app-codeStash-",
    imageUrl: githubLikeApp,
  },
];

export const contactSocialMedia = [
  {
    id: "0",
    title: "Github",
    url: "https://github.com/codigo-natural",
    icon: github,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "Twitter",
    url: "https://twitter.com/IvnCami19622110",
    icon: twitter,
    width: 36,
    height: 36,
  },
  {
    id: "2",
    title: "Instagram",
    url: "https://www.instagram.com/ivan__camilo/",
    icon: instagram,
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "Linkedin",
    url: "https://www.linkedin.com/in/ivancamilobuitrago/",
    icon: linkedin,
    width: 36,
    height: 36,
  },
];
