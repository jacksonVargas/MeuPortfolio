export default function About() {
  return(
    <>
      <section id='sobre' className='flex flex-col justify-center px-5 md:px-20 lg:px-50 py-20'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-zinc-400 text-5xl font-semibold'>Sobre</h1>
        </div>

        <div className='w-full flex items-center gap-5 py-8'>
          <div className='flex-1'>
            <p className='text-zinc-400 text-[1rem]'>
              Olá! meu nome é Jackson Vargas sou desenvolvedor web front end, meu foco principal é criar layouts modernos e de alto desempenho
              para o usuário final. Nesse portfolio você verá algumas das minhas habilidades e alguns projetos que desenvolvi ao longo dos anos.
              <br /> <br />
              Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:

              <br /> <br />
            </p> 

            <div className='flex items-center gap-2'>
              <span className='shadow-sm shadow-blue-400 text-zinc-400 py-1 px-3 rounded cursor-default text-sm'>React</span>
              <span className='shadow-sm shadow-blue-400 text-zinc-400 py-1 px-3 rounded cursor-default text-sm'>Next</span>
              <span className='shadow-sm shadow-blue-400 text-zinc-400 py-1 px-3 rounded cursor-default text-sm'>Typescript</span>
              <span className='shadow-sm shadow-blue-400 text-zinc-400 py-1 px-3 rounded cursor-default text-sm'>Tailwind</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}