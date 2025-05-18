import { ProjectInterface } from "./types";

export const projects: ProjectInterface[] = [
  {
    id: "1",
    title: "Frontend Development",
    tagline: "Modern UI Solutions",
    description:
      "Creating responsive and intuitive user interfaces with React and TailwindCSS.",
    tags: [
      {
        name: "React",
        icon: "logos:react",
        color: "primary",
        gradient:
          "bg-gradient-to-br from-blue-500 to-cyan-400 border-small border-white/50 shadow-blue-500/30",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        color: "secondary",
        gradient:
          "bg-gradient-to-br from-blue-600 to-indigo-400 border-small border-white/50 shadow-indigo-500/30",
      },
      {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        color: "success",
        gradient:
          "bg-gradient-to-br from-cyan-500 to-teal-400 border-small border-white/50 shadow-teal-500/30",
      },
    ],
    image: "/projectcards/uxdesign.webp",
    bgColor: "bg-black",
    textColor: "text-white",
    modalContent: {
      heading: "Intuitive React Components",
      paragraphs: [
        "Our frontend development projects focus on building highly responsive and accessible user interfaces using the latest React patterns and TailwindCSS utilities.",
        "Each component is carefully crafted with performance in mind, ensuring smooth interactions and minimal bundle size through code splitting and lazy loading techniques.",
      ],
      showcaseImage: "/projectcards/uxdesign.webp",
    },
  },
  {
    id: "2",
    title: "Interactive Design",
    tagline: "Engaging user experiences",
    description:
      "Building beautiful, animated interfaces with HeroUI and Framer Motion.",
    tags: [
      {
        name: "HeroUI",
        icon: "custom-hero-ui",
        color: "primary",
        gradient:
          "bg-gradient-to-br from-gray-900 to-black border-small border-white/50 shadow-black/40",
      },
      {
        name: "Framer Motion",
        icon: "logos:framer",
        color: "danger",
        gradient:
          "bg-gradient-to-br from-pink-500 to-rose-400 border-small border-white/50 shadow-rose-500/30",
      },
      {
        name: "UX Design",
        icon: "material-symbols:shape-line",
        color: "secondary",
        gradient:
          "bg-gradient-to-br from-violet-500 to-fuchsia-400 border-small border-white/50 shadow-fuchsia-500/30",
      },
    ],
    image: "/projectcards/interactive.png",
    bgColor: "bg-zinc-200",
    textColor: "text-zinc-800",
    modalContent: {
      heading: "Animation-Rich Interfaces",
      paragraphs: [
        "Our interactive design work leverages HeroUI components enhanced with Framer Motion animations to create engaging and delightful user experiences.",
        "We focus on meaningful animations that guide users through their journey while maintaining accessibility and performance standards.",
      ],
      showcaseImage: "/projectcards/interactive.png",
    },
  },
  {
    id: "3",
    title: "Full Stack Development",
    tagline: "End-to-end solutions",
    description:
      "Comprehensive web applications with Next.js and modern backend technologies.",
    tags: [
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        color: "default",
        gradient:
          "bg-gradient-to-br from-zinc-700 to-zinc-500 border-small border-white/50 shadow-zinc-500/30",
      },
      {
        name: "Node.js",
        icon: "logos:nodejs-icon",
        color: "success",
        gradient:
          "bg-gradient-to-br from-green-500 to-emerald-400 border-small border-white/50 shadow-emerald-500/30",
      },
      {
        name: "MongoDB",
        icon: "logos:mongodb-icon",
        color: "success",
        gradient:
          "bg-gradient-to-br from-green-600 to-lime-400 border-small border-white/50 shadow-lime-500/30",
      },
    ],
    image: "/projectcards/fullstack.png",
    bgColor: "bg-white",
    textColor: "text-zinc-900",
    modalContent: {
      heading: "Seamless Integration",
      paragraphs: [
        "Our full-stack applications provide complete end-to-end solutions using Next.js for the frontend and modern backend technologies for robust server-side functionality.",
        "We implement efficient data fetching patterns, secure API integrations, and optimized database queries to ensure fast, reliable applications.",
      ],
      showcaseImage: "/projectcards/fullstack.png",
    },
  },
];
