import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='fixed z-1 w-full py-3 px-5 md:px-20 lg:px-50 border-b border-b-zinc-700 bg-black'>
        <div className='flex justify-between items-center'>
          <a href="#" className='text-zinc-300 hover:text-zinc-400 text-2xl font-semibold'>
            &lt;Dev /&gt;
          </a>

          <ul className='flex items-center gap-10 max-sm:hidden'>
            <a className='text-zinc-300 text-sm hover:text-zinc-400' href="#sobre">Sobre</a>
            <a className='text-zinc-300 text-sm hover:text-zinc-400' href="#habilidades">Habilidades</a>
            <a className='text-zinc-300 text-sm hover:text-zinc-400' href="#projetos">Projetos</a>
            <a className='text-zinc-300 text-sm hover:text-zinc-400' href="#contato">Contato</a>
          </ul>

          <a onClick={() => setIsOpen(!isOpen)} className='text-zinc-300 hover:text-zinc-400 sm:hidden cursor-pointer'>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </a>
        </div>
      </header>

      {isOpen && (
        <div className='fixed z-1 top-15 w-full border-b border-b-zinc-700 bg-black py-3'>
          <ul className='flex flex-col gap-8 px-5'>
            <a onClick={() => setIsOpen(!isOpen)} className='text-zinc-300 text-sm hover:text-zinc-400' href="#sobre">Sobre</a>
            <a onClick={() => setIsOpen(!isOpen)} className='text-zinc-300 text-sm hover:text-zinc-400' href="#habilidades">Habilidades</a>
            <a onClick={() => setIsOpen(!isOpen)} className='text-zinc-300 text-sm hover:text-zinc-400' href="#projetos">Projetos</a>
            <a onClick={() => setIsOpen(!isOpen)} className='text-zinc-300 text-sm hover:text-zinc-400' href="#contato">Contato</a>
          </ul>
        </div>
      )}
    </>
  )
}

export default Header