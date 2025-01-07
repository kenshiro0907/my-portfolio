import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  prisma,
  graphql,
  ats_afrique,
  epitech,
  icandy_enterprise,
  bot_discord,
  my_pokedex,
  earthquake_data_analytics,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "ATS-Afrique",
    icon: ats_afrique,
    iconBg: "#383E56",
    date: "Jul 2021 - Nov 2021",
    points: [
      "Design and development of a web application for data management with a client-server architecture.",
      "Implementation of dynamic and responsive user interfaces, tailored to the needs of users.",
      "Development of REST APIs to connect the frontend to the backend.",
    ],
  },
  {
    title: "Epitech Regional Assistant (ERA)",
    company_name: "Epitech",
    icon: epitech,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Mar 2023",
    points: [
      "Facilitation of educational activities.",
      "Creation of educational materials.",
      "Monitoring of first and second-year students.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Icandy Enterprise",
    icon: icandy_enterprise,
    iconBg: "#383E56",
    date: "Apr 2023 - Aug 2023",
    points: [
      "Design and development of a music streaming platform, ensuring the management of users and tracks.",
      "Implementation of REST APIs for data management and interactions with the frontend.",
      "Optimization of workflows using the Kanban method to improve productivity and project management.",
    ],
  },
];

const projects = [
  {
    name: "Discord Bot",
    description:
      "Discord bot that allows storing, managing, and searching favorite music playlists directly on YouTube.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: bot_discord,
    source_code_link: "https://github.com/kenshiro0907/bot-discord",
  },
  {
    name: "My Pokedex",
    description:
      "An interactive Pokédex project, allowing users to view information about Pokémon, such as their characteristics, evolutions, and types.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: my_pokedex,
    source_code_link: "https://github.com/kenshiro0907/my-pokedex",
  },
  {
    name: "Earthquake Data Analytics",
    description:
      "Web application that allows users to visualize and analyze data from various earthquakes around the world.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: earthquake_data_analytics,
    source_code_link:
      "https://github.com/kenshiro0907/earthquake-data-analytic",
  },
];

export { services, technologies, experiences, projects };
