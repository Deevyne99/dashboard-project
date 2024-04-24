// import React from 'react'
import { HiBell } from 'react-icons/hi'
import avatar from '../assets/avatar.jpeg'

const Navbar = () => {
  return (
    <header className=' flex flex-col  mt-8 '>
      <nav className='flex justify-between items-center pr-24 pl-12 '>
        <div className='flex gap-16'>
          <input
            type='text'
            className='bg-[#f8fbfb] outline-none w-[500px] p-1 rounded-[8px]'
          />
          <ul className='flex items-center gap-6'>
            <a href=''>Feedback</a>
            <a href=''>contacts</a>
            <a href=''>Help</a>
          </ul>
        </div>
        <div className='flex gap-4 items-center justify-center '>
          <div className=' relative'>
            <HiBell className='text-[#C4BDD5] text-xl ' />
            <div className='top-0 absolute  left-4 bg-[#FF0000] h-[5px] w-[5px] rounded-[100%]'></div>
          </div>
          <div className='flex w-[30px] h-[30px]'>
            <img
              src={avatar}
              alt='avatar'
              className=' rounded-[8px] w-full object-cover '
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
