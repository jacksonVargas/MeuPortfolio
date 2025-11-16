import { projects } from '../constants'

export default function Projects() {
  return (
    <>
      <section id='projetos' className='px-5 md:px-20 lg:px-50 flex flex-col py-20'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-zinc-400 text-5xl'>Projetos</h1>
        </div>

        <div className='flex flex-col gap-5 py-10'>
          {
            projects.map((item) => (
              <div className='flex flex-wrap items-center gap-5 p-5 shadow-sm shadow-blue-400 rounded' key={item.id}>
                <div className='bg-[#111] rounded'>
                  <img
                    src={item.image}
                    className='w-full h-full object-fill'
                  />              
                </div> 

                <div className='flex flex-col gap-1'>
                  <h3 className='cursor-default text-zinc-300 text-3xl'>{item.title}</h3>
                  <p className='cursor-default text-zinc-400 mb-3'>{item.description}</p>

                  <div className='flex items-center gap-2 mb-5'>
                    {
                      item.tags.map((item, index) => (
                        <span className='cursor-default shadow-sm shadow-blue-400 text-zinc-400 rounded py-1 px-2 text-[.7rem]' key={index}>
                          {item}
                        </span>
                      ))
                    }
                  </div>

                  <div className='flex items-center gap-2'>
                    <a href={item.gitUrl} target='blank' className='text-sm flex items-center gap-1 shadow-sm shadow-blue-400 hover:shadow-zinc-400 text-zinc-400 rounded py-1 px-3'>
                      Código Fonte
                    </a>

                    <a href={item.demoUrl} target='blank' className='text-sm flex items-center gap-1 shadow-sm shadow-blue-400 hover:shadow-zinc-400 text-zinc-400 rounded py-1 px-3'>
                      Deploy
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}