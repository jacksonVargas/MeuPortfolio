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
    image: 'assets/imageClinica.png',
    tags: ['Next', 'Tailwind'],
    gitUrl: 'https://github.com/jacksonVargas/landingPageClinica',
    demoUrl: 'https://landing-page-clinica-kohl.vercel.app/',
  },
  {
    id: 2,
    title: 'Página de Vendas',
    description: 'Uma página de vendas para um e-book de emagrecimento',
    image: 'assets/image-pagina-venda.png',
    tags: ['React', 'Tailwind'],
    gitUrl: 'https://github.com/jacksonVargas/pagina_de_venda_ebook',
    demoUrl: 'https://pagina-de-venda-gold.vercel.app/'
  }
]
