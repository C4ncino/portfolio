import { ProjectInfo, ProjectText } from "@/types/general";
import { technologies } from "./tech-stack"

import VRImg from "@img-projects/vr.png"
import DiaryImg from "@img-projects/diary.jpg"
import PlatypusImg from "@img-projects/platy.svg"
import CashDialImg from "@img-projects/cash-dial.svg"
import FreedomAppImg from "@img-projects/freedom.svg"
import ECommerceImg from "@img-projects/e-commerce.png"
import BattleshipImg from "@img-projects/battleship.png"
import SemanticImg from "@img-projects/semantic.png"
import MusicImg from "@img-projects/music.svg"
import TRAppImg from "@img-projects/tr.png"
import HRImg from "@img-projects/hr.svg"
import CurrencyImg from "@img-projects/currency.svg"
import SupervisorImg from "@img-projects/super.svg"

import PlaceholderImg from "@img-projects/placeholder.svg"

import { Language } from "@/i18n/ui";

const dbs = technologies[1].items
const front = technologies[3].items
const back = technologies[4].items
const tools = technologies[5].items
const languages = technologies[6].items

export const projectsIds = [
  "tr",
  "semantic",
  "cash-dial",
  "battleship",
  "platypus",
  "currency",
  "vr",
  "supervisor",
  "freedom",
  "music",
  "e-commerce",
  "diary",
  "hr",
] as const

type ProjectId = typeof projectsIds[number]

export const projectsInfo: Record<ProjectId, ProjectInfo> = {
  vr: {
    image: VRImg,
    repositories: [
      "https://github.com/C4ncino/VR",
    ],
    technologies: [languages[6], "Unity"],
  },
  diary: {
    image: DiaryImg,
    repositories: [
      "https://github.com/C4ncino/diary",
    ],
    technologies: [languages[2], languages[1], front[4], front[3], back[1], dbs[0]],
  },
  platypus: {
    image: PlatypusImg,
    repositories: [
      "https://github.com/C4ncino/Platypus",
    ],
    technologies: [languages[3]],
  },
  "cash-dial": {
    image: CashDialImg,
    repositories: [
      "https://github.com/C4ncino/cash-dial",
    ],
    technologies: [languages[1], front[2], front[4], front[5]],
  },
  freedom: {
    image: FreedomAppImg,
    repositories: [],
    technologies: [languages[1], front[2], front[4], front[7]],
  },
  "e-commerce": {
    image: ECommerceImg,
    repositories: [
      "https://github.com/sistemas-distribuidos-ibero/E-commerce",
    ],
    technologies: ['Docker', languages[0], languages[2], front[2], front[4], back[1], back[0], dbs[0], dbs[2], dbs[3]],
  },
  battleship: {
    image: BattleshipImg,
    repositories: [
      "https://github.com/C4ncino/batalla_naval",
    ],
    technologies: ["Linux", languages[3]],
  },
  semantic: {
    image: SemanticImg,
    demo: "https://semantic-html-slides.vercel.app/",
    repositories: [],
    technologies: ['Markdown', front[0], front[1]]
  },
  music: {
    image: MusicImg,
    repositories: [
      "https://github.com/C4ncino/Musical_Emotions",
    ],
    technologies: [languages[2], tools[1], tools[2], tools[3]]
  },
  tr: {
    image: TRAppImg,
    repositories: [
      {
        title: "App",
        url: "https://github.com/C4ncino/app_ase",
      },
      {
        title: "Backend",
        url: "https://github.com/C4ncino/ase_backend",
      }
    ],
    technologies: ['Docker', languages[1], languages[2], languages[4], front[2], front[4], front[5], back[0], back[1], dbs[0], dbs[3], dbs[4]]
  },
  hr: {
    image: HRImg,
    repositories: [],
    technologies: [languages[5], front[2], front[0], back[3], dbs[1]]
  },
  currency: {
    image: CurrencyImg,
    repositories: [],
    technologies: [languages[2], tools[0], tools[1], 'SQLite']
  },
  supervisor: {
    image: SupervisorImg,
    repositories: ["git@github.com:C4ncino/supervisor.git"],
    technologies: ["RaspberryPi", "Plotly", "Python", dbs[0]]
  }
}

export const projectsEspTexts: Record<ProjectId, ProjectText> = {
  vr: {
    name: "Rehabilitación Virtual",
    description: "El proyecto de mi servicio social que buscaba innovar la terapia para pacientes con problemas de equilibrio con una plataforma física que permitiría a los pacientes realizar ejercicios de equilibrio en un entorno virtual mediante unos lentes de realidad virtual."
  },
  diary: {
    name: "Diary",
    description: "Una aplicación web para profesionales de la salud mental y sus pacientes. La aplicación permite a los pacientes crear un registro diario de sus emociones y a los profesionales de la salud mental darles un seguimiento fuera del consultorio."
  },
  platypus: {
    name: "Platypus",
    description: "Analizador léxico y sintáctico para el lenguaje de programación Platypus, un nuevo lenguaje inventado. El proyecto fue parte de una clase de la universidad, en la que se diseñó un automata de estados finitos para la fase de análisis léxico y un parser sintáctico."
  },
  "cash-dial": {
    name: "Cash Dial",
    description: "Un proyecto personal en desarrollo para llevar las finanzas personales de una manera sencilla y eficiente. Es una aplicación móvil hecha con Expo y React Native y con una base de datos embebida con SQLite."
  },
  freedom: {
    name: "Reportes internos",
    description: "Desarrollé una aplicación móvil para la generación de reportes internos en una empresa. El flujo de trabajo mejoró, ya que permitió gestionar reportes en cualquier momento. El proyecto lo inicie en unas practicas profesionales en la empresa y al finalizar mi tiempo en ella lo continue como profesional independiente."
  },
  "e-commerce": {
    name: "E-commerce",
    description: "Un proyecto de la universidad para poner en práctica el diseño e implementación de sistemas distribuidos, para lo cual realizamos el diseño de un e-commerce con un backend dividido en varios microservicios y el uso de una base de datos SQL y una NoSQL para el almacenamiento de datos y un frontend en React."
  },
  battleship: {
    name: "Batalla Naval",
    description: "Una recreación del juego de batalla naval para terminal usando C++. El juego consiste en un menú inicial para iniciar o unirse a una partida, las partidas crean una cola de mensajes por la que se comunican dos procesos. De igual forma se utilizan semáforos para evitar que ambos jugadores ataquen al mismo tiempo."
  },
  semantic: {
    name: "HTML Semántico",
    description: 'Impartí una clase sobre HTML semántico y accesibilidad web para compañeros de la carrera en la universidad. Programe una presentación con <a href="https://sli.dev/" target="_blank" class="text-blue-800 dark:text-blue-300">Slidev</a> con ejemplos abordando cada parte de HTML y dando a conocer todas las etiquetas y la semántica de las mismas.'
  },
  music: {
    name: "Musical Emotions",
    description: "Un proyecto de la universidad capaz de recomendar 5 canciones de Spotify en base a las emociones detectadas en un video corto de la cara del usuario. El proyecto se utiliza mediante la terminal."
  },
  tr: {
    name: "TR App",
    description: 'Como proyecto final de la universidad desarrollé en conjunto de tres personas más un sistema para el entrenamiento personalizado e interpretación de <abbr title="Lengua de Señas Mexicana">LSM</abbr>. El sistema consiste de un backend para realizar el entrenamiento de los modelos de <abbr title="Machine Learning">ML</abbr>, una app móvil como interfaz de usuario y un guante para capturar los movimientos.'
  },
  hr: {
    name: "Sistema de RH",
    description: "Durante unas prácticas profesionales participé en el desarrollo un sistema web de gestión de recursos humanos capaz de gestionar la información personal de los empleados, así como sus horarios y asistencia, además de poder calcular la remuneración de cada empleado."
  },
  currency: {
    name: "Bot de divisas",
    description: 'Desarrollé un bot capaz de obtener la paridad del peso con monedas extranjeras a cualquier hora del día mediante webscrapping de <a href="https://mx.investing.com/" target="_blank" class="text-blue-800 dark:text-blue-300">investing.com</a> para mandar un reporte de los datos obtenidos por correo con un historial de 30 días.'
  },
  supervisor: {
    name: "Supervisor",
    description: "Un proyecto de la universidad capaz de monitorear el tráfico de red mediante la captura de paquetes TCP. El proyecto se ejecuta en una Raspberry Pi, la cual habilita una página web para visualizar el tráfico de red."
  }
}

export const projectsEngTexts: Record<ProjectId, ProjectText> = {
  vr: {
    name: "Virtual Rehabilitation",
    description: "My social service project aimed to innovate therapy for patients with balance disorders through a physical platform that allowed patients to perform balance exercises in a virtual environment using virtual reality headsets."
  },
  diary: {
    name: "Diary",
    description: "A web application for mental health professionals and their patients. The application allows patients to create a daily log of their emotions and enables mental health professionals to monitor their progress outside of office visits."
  },
  platypus: {
    name: "Platypus",
    description: "Lexical Analyser for new programming language Platypus. The project was part of a class at the university, in which a finite state automaton was designed for the lexical analysis phase and a syntactic parser."
  },
  "cash-dial": {
    name: "Cash Dial",
    description: "A personal project in development to keep track of personal finances in a simple and efficient way. It is a mobile app made with Expo and React Native and with an embedded database with SQLite."
  },
  freedom: {
    name: "Internal Reports",
    description: "I developed a mobile application for generating internal reports within a company. The workflow improved by enabling report management at any time. I started the project during a professional internship at the company, and after completing my internship, I continued working on it as an independent professional."
  },
  "e-commerce": {
    name: "E-commerce",
    description: "A university project to practice the design and implementation of distributed systems. We designed an e-commerce platform with a backend divided into several microservices, using both an SQL and a NoSQL database for data storage, and a frontend built with React."
  },
  battleship: {
    name: "Battleship",
    description: "A recreation of the Battleship game for the terminal using C++. The game features an initial menu to start or join a match. Matches create a message queue through which two processes communicate. Semaphores are also used to prevent both players from attacking at the same time."
  },
  semantic: {
    name: "Semantic HTML",
    description: 'I taught a class on semantic HTML and web accessibility for fellow students at the university. I created a presentation using <a href="https://sli.dev/" target="_blank" class="text-blue-800 dark:text-blue-300">Slidev</a> with examples covering each part of HTML and explaining all the tags and their semantics.'
  },
  music: {
    name: "Musical Emotions",
    description: "A university project capable of recommending 5 Spotify songs based on emotions detected from a short video of the user's face. The project is operated through the terminal."
  },
  tr: {
    name: "TR App",
    description: 'For my final university project, I worked alongside three other people to develop a system for personalized training and interpretation of <abbr title="Mexican Sign Language">LSM</abbr>. The system includes a backend for <abbr title="Machine Learning">ML</abbr> training, a mobile app as the user interface, and a glove for capturing the hand movements.'
  },
  hr: {
    name: "HR System",
    description: "During an internship, I helped to develop a web human resources management system capable of handling employees' personal information, as well as their schedules and attendance. It also calculates the remuneration for each employee."
  },
  currency: {
    name: "Currency Bot",
    description: 'I developed a bot capable of retrieving the exchange rate between the Mexican peso and foreign currencies at any time of the day through web scraping from <a href="https://mx.investing.com/" target="_blank" class="text-blue-800 dark:text-blue-300">investing.com</a>. The bot sends a report of the collected data via email, including a 30-day history.'
  },
  supervisor: {
    name: "Supervisor",
    description: "A university project capable of monitoring network traffic by capturing TCP packets. The project runs on a Raspberry Pi, which hosts a web page to visualize the network traffic."
  }
}

export function getProject(lang: Language, id: ProjectId) {
  const text = lang === "es" ? projectsEspTexts[id] : projectsEngTexts[id];
  return { ...text, projectInfo: projectsInfo[id] }
}
