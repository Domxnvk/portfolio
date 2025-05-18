export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  value: number;
  image: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "right";
  cardStyle?: "blur" | "solid" | "gradient";
}
