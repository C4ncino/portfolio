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
    technologies: [languages[3]],
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
    technologies: [languages[5], front[2], front[0], back[3], dbs[0]]
  },
  currency: {
    image: CurrencyImg,
    repositories: [],
    technologies: [languages[2], tools[0], tools[1], 'SQLite']
  }
}

export const projectsEspTexts: Record<ProjectId, ProjectText> = {
  vr: {
    name: "Rehabilitación Virtual",
    description: ""
  },
  diary: {
    name: "Diary",
    description: ""
  },
  platypus: {
    name: "Platypus",
    description: ""
  },
  "cash-dial": {
    name: "Cash Dial",
    description: ""
  },
  freedom: {
    name: "",
    description: ""
  },
  "e-commerce": {
    name: "E-commerce",
    description: ""
  },
  battleship: {
    name: "Batalla Naval",
    description: ""
  },
  semantic: {
    name: "HTML Semántico",
    description: ""
  },
  music: {
    name: "Musical Emotions",
    description: ""
  },
  tr: {
    name: "TR App",
    description: ""
  },
  hr: {
    name: "Sistema de RH",
    description: ""
  },
  currency: {
    name: "Bot de divisas",
    description: ""
  }
}

export const projectsEngTexts: Record<ProjectId, ProjectText> = {
  vr: {
    name: "Virtual Rehabilitation",
    description: ""
  },
  diary: {
    name: "Diary",
    description: ""
  },
  platypus: {
    name: "Platypus",
    description: ""
  },
  "cash-dial": {
    name: "Cash Dial",
    description: ""
  },
  freedom: {
    name: "",
    description: ""
  },
  "e-commerce": {
    name: "E-commerce",
    description: ""
  },
  battleship: {
    name: "Battleship",
    description: ""
  },
  semantic: {
    name: "Semantic HTML",
    description: ""
  },
  music: {
    name: "Musical Emotions",
    description: ""
  },
  tr: {
    name: "TR App",
    description: ""
  },
  hr: {
    name: "HR System",
    description: ""
  },
  currency: {
    name: "Currency Bot",
    description: ""
  }
}

export function getProject(lang: Language, id: ProjectId) {
  const text = lang === "es" ? projectsEspTexts[id] : projectsEngTexts[id];
  return { ...text, projectInfo: projectsInfo[id] }
}
