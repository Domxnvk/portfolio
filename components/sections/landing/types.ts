export interface HeroSectionProps {
  onExplore?: () => void;
}

export interface Skill {
  name: string;
  percentage: number;
  gradient: string;
}

export interface Framework {
  name: string;
  icon: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
}
