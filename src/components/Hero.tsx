function Hero() {
  return (
    <>
      <section id='home' className='min-h-screen flex flex-col gap-2 justify-center py-20 px-5 md:px-20 lg:px-50'>
        <p className='text-zinc-400'>Olá, meu nome é</p>
        <h1 className='text-blue-400 text-6xl max-sm:text-5xl'>JACKSON VARGAS.</h1>
        <h3 className='text-zinc-400 text-2xl max-sm:text-xl'>Desenvolvo layouts modernos para web</h3>
        <p className='text-zinc-400 mb-5'>Sou desenvolvedor web front end, sempre buscando criar os layouts mais modernos para o usuário final.</p>
        <a href="#projetos" className='py-2 px-3 shadow-sm shadow-blue-400 text-zinc-400 w-fit rounded hover:shadow-zinc-400'>
          Meus Projetos
        </a>
      </section>
    </>
  )
}

export default Hero