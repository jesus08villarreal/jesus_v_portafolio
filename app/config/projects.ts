interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js, TypeScript, and TailwindCSS. Features dark mode, animations, and multilingual support.',
    image: '/projects/portafolio.png',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/jesus08villarreal/jesus_v_portafolio',
    link: 'https://jesusvportafolio.vercel.app/'
  },
] 