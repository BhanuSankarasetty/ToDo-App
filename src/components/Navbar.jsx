import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-[#00c4cc] text-white py-4'>
        <div className="logo">
            <span className='font-bold text-2xl mx-3 md:mx-8 '>Task Scheduler</span>
        </div>
      <ul className="flex gap-8 mx-5 md:mx-8 text-lg p-1">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar