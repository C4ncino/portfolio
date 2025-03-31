import { TechStack } from "@/types/general"

export const technologies: TechStack[] = [
  {
    name: {
      es: "Tecnologías",
      en: "Technologies"
    },
    columns: "row-span-4",
    items: [
      "git",
      "GitHub",
      "Docker",
    ]
  }, {
    name: {
      es: "Bases de datos",
      en: "Databases"
    },
    columns: "row-span-5",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase",
    ]
  }, {
    name: {
      es: "Aprendiendo",
      en: "Learning"
    },
    columns: "row-start-5 row-span-3",
    items: [
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "AWS",
        icon: "amazonwebservices-wordmark"
      }
    ]
  }, {
    name: {
      es: "Frontend",
      en: "Frontend"
    },
    columns: "col-start-1 row-span-8",
    items: [
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Bootstrap",
      "React",
      "Expo",
      "Astro",
      "Ionic",
    ]
  }, {
    name: {
      es: "Backend",
      en: "Backend"
    },
    columns: "row-start-6 row-span-5",
    items: [
      {
        name: "Node.js",
        icon: "nodejs",
      },
      "Flask",
      {
        name: "Django",
        icon: "django",
        prefix: "material-icon-theme"
      },
      "Laravel",
    ]
  }, {
    name: {
      es: "Otros",
      en: "Others"
    },
    columns: "col-start-2 row-start-11_ row-span-5",
    items: [
      "Selenium",
      "pandas",
      "TensorFlow",
      "OpenCV",
    ]
  }, {
    name: {
      es: "Lenguajes",
      en: "Languages"
    },
    columns: "col-span-2",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      {
        name: "C++",
        icon: "cplusplus",
      },
      "Arduino",
      "PHP",
      {
        name: "C#",
        icon: "csharp"
      },
    ]
  }
]
