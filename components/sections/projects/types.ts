export interface TagInterface {
  name: string;
  icon: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
  gradient?: string;
}

export interface ModalContentInterface {
  heading: string;
  paragraphs: string[];
  showcaseImage: string;
}

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  tags: TagInterface[];
  image: string;
  bgColor: string;
  textColor: string;
  tagline: string;
  modalContent: ModalContentInterface;
}