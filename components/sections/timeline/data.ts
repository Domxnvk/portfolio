import { TimelineEvent } from "./types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "Frontend Developer",
    description:
      "Worked on various web applications using React and TailwindCSS, focusing on responsive design and performance optimization.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    year: "2020",
    value: 20,
    image: "/timeline/senior-dev.png",
    size: "sm",
    align: "left",
    cardStyle: "solid",
  },
  {
    id: "2",
    title: "Senior Developer",
    description:
      "Led a team of developers in building a next-generation e-commerce platform with advanced UI/UX features.",
    tags: ["Next.js", "HeroUI", "Team Lead"],
    year: "2022",
    value: 40,
    image: "/timeline/uxdesign.webp",
    size: "sm",
    align: "left",
    cardStyle: "solid",
  },
  {
    id: "3",
    title: "Tech Lead",
    description:
      "Architected and implemented a scalable design system for enterprise applications, improving development efficiency by 40%.",
    tags: ["Architecture", "Design Systems", "Leadership"],
    year: "2024",
    value: 60,
    image: "/timeline/design-system.png",
    size: "sm",
    align: "right",
    cardStyle: "solid",
  },
  {
    id: "4",
    title: "Engineering Manager",
    description:
      "Managed a cross-functional team of 15 engineers, delivering enterprise solutions and mentoring junior developers.",
    tags: ["Management", "Project Planning", "Mentorship"],
    year: "2025",
    value: 80,
    image: "/timeline/tech-lead.png",
    size: "md",
    align: "left",
    cardStyle: "blur",
  },
  {
    id: "5",
    title: "VP of Engineering",
    description:
      "Overseeing technical strategy and innovation while building high-performance engineering culture across multiple teams.",
    tags: ["Leadership", "Strategy", "Innovation"],
    year: "Future",
    value: 100,
    image: "/timeline/vp-engineering.png",
    size: "lg",
    align: "right",
    cardStyle: "blur",
  },
];
