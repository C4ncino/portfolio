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
