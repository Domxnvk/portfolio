export const skillsList = [
  {
    name: "React",
    percentage: 75,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "TailwindCSS",
    percentage: 72,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    name: "Framer Motion",
    percentage: 94,
    gradient: "from-pink-500 to-rose-400",
  },
];

export const frameworksList = [
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    color: "default",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    color: "primary",
  },
  {
    name: "HeroUI",
    icon: "logos:react",
    color: "secondary",
  },
  {
    name: "Framer Motion",
    icon: "logos:framer",
    color: "success",
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
    color: "warning",
  },
  {
    name: "Redux",
    icon: "logos:redux",
    color: "danger",
  },
  {
    name: "Jest",
    icon: "logos:jest",
    color: "secondary",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    color: "success",
  },
  {
    name: "GraphQL",
    icon: "logos:graphql",
    color: "danger",
  },
];

export const getChipGradient = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-gradient-to-br from-blue-500/80 to-blue-300/80 border-small border-blue-200 shadow-blue-500/20";
    case "secondary":
      return "bg-gradient-to-br from-purple-500/80 to-purple-300/80 border-small border-purple-200 shadow-purple-500/20";
    case "success":
      return "bg-gradient-to-br from-green-500/80 to-green-300/80 border-small border-green-200 shadow-green-500/20";
    case "warning":
      return "bg-gradient-to-br from-yellow-500/80 to-yellow-300/80 border-small border-yellow-200 shadow-yellow-500/20";
    case "danger":
      return "bg-gradient-to-br from-red-500/80 to-red-300/80 border-small border-red-200 shadow-red-500/20";
    default:
      return "bg-gradient-to-br from-zinc-500/80 to-zinc-300/80 border-small border-zinc-200 shadow-zinc-500/20";
  }
};