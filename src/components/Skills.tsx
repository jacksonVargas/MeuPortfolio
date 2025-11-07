export default function Skills() {
  const skills = [
    'Next',
    'React',
    'Typescript',
    'Javascript',
    'Tailwind',
    'Git e GithHub',
    'HTML5',
    'CSS3'
  ]

  return (
    <>
      <section id='habilidades' className='px-5 md:px-20 lg:px-50 py-20 flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-zinc-400 text-5xl font-semibold'>Habilidades</h1>
        </div>

        <div className='flex flex-wrap items-center gap-3 py-10'>
          {
            skills.map(item => (
              <span className='shadow-sm shadow-blue-400 hover:shadow-zinc-400 cursor-default py-5 px-10 text-lg text-zinc-400 rounded' key={item}>
                {item}
              </span>
            ))
          }
        </div>
      </section>
    </>
  )
}