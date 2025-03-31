import { UiKey } from "@/i18n/ui";

type Link = {
  href: string;
  icon: string;
}

type InnerLink = Link & {
  label: UiKey;
}

type ExternalLink = Link & {
  label: string;
}

type JobDescription = {
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

type Tech = {
  name: string;
  icon: string;
  prefix?: string;
} | string;

type TechStack = {
  columns: string;
  name: {
    [k: string]: string
    es: string,
    en: string
  };
  items: Tech[];
}
