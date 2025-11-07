interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  tags: string[],
  gitUrl: string,
  demoUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Clínica Odontológica',
    description: 'Uma landing page profissional feita para uma clínica odontológica, com um design moderno e responsivo.',
    image: 'https://s10.aconvert.com/convert/p3r68-cdx67/a2gl3-7z22l.webp',
    tags: ['Next', 'Tailwind'],
    gitUrl: 'https://github.com/jacksonVargas/landingPageClinica',
    demoUrl: 'https://landing-page-clinica-kohl.vercel.app/',
  }
]