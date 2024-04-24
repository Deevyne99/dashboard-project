import { useState } from 'react'
import { FaBitcoin } from 'react-icons/fa6'
import { links } from '../data'

const Sidebar = () => {
  const [value, setValue] = useState(0)
  return (
    <aside className='bg-[#3326AE]  w-[150px]  absolute h-screen top-0 left-0'>
      <header className='py-6 px-4 flex  items-center'>
        <FaBitcoin className='text-xl text-white' />
      </header>
      <div className='relative flex flex-col gap-12 px-4 mt-16'>
        {links.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`text-xl text-[#f8fbfb] ${
                index === value
                  ? `bg-white text-[#FF0000] transition-all duration-500 w-[50px] p-4 shadow-xl relative rounded-xl ml-4 z-10`
                  : null
              }`}
              onClick={() => setValue(index)}
            >
              <item.icon />
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
