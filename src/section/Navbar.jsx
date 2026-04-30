import React, { useState } from 'react'
import { navLinks } from '../constants'

const NaveList = () => {
 return(
   <ul className='nav-ul' >
    {navLinks.map((item) =>( 
      <li className='nav-li' key={item.id}>
        <a href={item.href} className='nav-li-a'>{item.name}</a>
      </li>
    ))}
  </ul>
 )
}
const Navbar = () => {
  const [open, setopen] = useState(false)
  const toggle = () => {
    setopen((prevopen) => { setopen(!prevopen) })
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 '>
      <div className='w-full max-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Javed</a>
          <button
            className='text-neutral-400 focus:outline-none sm:hidden flex'
            onClick={() => {
              toggle()
            }}
          ><img src={open ? "assets/close.svg" : "assets/menu.svg"} alt="tofggleimg" className='w-6 h-6' /></button>
          <nav className="sm:flex hidden">
            <NaveList />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${open ? "max-h-screen" : "max-h-0"} `}>
            <NaveList/>
      </div>
    </header>
  )
}

export default Navbar