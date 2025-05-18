# Portfolio - Next.js & HeroUI Portfolio Templates

A modern, responsive portfolio template built with Next.js 14 and HeroUI components. This project was created for the "Portfolio Templates" hackathon, demonstrating best practices in frontend development with React, HeroUI, TailwindCSS, and Framer Motion animations.

![Portfolio Preview](https://cdn.acmbot.xyz/images/248e47980d4ddcaa2688f1b305b5f6d40b7d2aa5111f7ef59a4ba8e2d5ff229d.png)

## Live Demo

[View Live Demo](portfolio.acmdom.dev)

## Features

- **Modern UI Components** - Built with HeroUI v2 and styled with TailwindCSS
- **Responsive Design** - Fully responsive across all device sizes
- **Smooth Animations** - Enhanced user experience with Framer Motion
- **Interactive Sections** - Hero, Projects, and Timeline sections with engaging interactions
- **Performance Optimized** - Fast loading times and optimized image delivery
- **Accessibility Focused** - ARIA attributes and keyboard navigation support

## Sections

### Hero Section
- Personal introduction with animated skills display
- Framework and technology showcase with floating animations
- Call-to-action buttons with hover effects

### Projects Section
- Interactive project cards with flip animations
- Modal project details with comprehensive information
- Tag system for technologies used in each project

### Timeline Section
- Career progression visualization with interactive cards
- Detailed work history with expandable information
- Animated transitions between timeline events

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started) - React framework with app directory structure
- [HeroUI v2](https://heroui.com/) - Modern UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Tailwind Variants](https://tailwind-variants.org) - Build variants with Tailwind CSS
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Iconify](https://iconify.design/) - Comprehensive icon library

## Getting Started

### Quick Start

To create a new project based on this template using `create-next-app`:

```bash
npx create-next-app -e https://github.com/domxnvk/portfolio-showcase
```

### Installation

Clone the repository:

```bash
git clone https://github.com/domxnvk/portfolio-showcase.git
cd portfolio-showcase
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Using pnpm (optional)

If using `pnpm`, add the following to your `.npmrc` file:

```
public-hoist-pattern[]=*@heroui/*
```

Then run `pnpm install` again to ensure dependencies are installed correctly.

## Customization

### Changing Personal Information

Edit the data files in the sections folders:
- `components/sections/landing/data.ts` - Skills and frameworks
- `components/sections/projects/data.ts` - Project information
- `components/sections/timeline/TimelineSection.tsx` - Career timeline

### Styling

The project uses TailwindCSS for styling:
- Global styles can be adjusted in `tailwind.config.js`
- Component-specific styles are included in their respective files
- Primitive styles for typography are in `components/primitives.ts`

### Adding New Sections

Create new section components in the `components/sections` directory following the established patterns for consistency.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created with ❤️ by [Domxnvk](https://github.com/domxnvk) for the Portfolio Templates Hackathon