import React, { useState } from 'react'
import 'boxicons'

const Header = () => {

  const [isMenuopen, setisMenuopen] = useState(false)
  return (
    <header className='sticky top-0 flex justify-between items-center text-black py-4 px md:px-32 bg-slate-100 shadow-md z-10'>
{/*Logo*/}
      <a href="#" className='text-3xl text-blue-600 font-bold ml-2'>Logo or Text</a>

{/*Nav*/}
      <ul className='hidden xl:flex font-semibold items-center gap-12 text-blue-500'>
        <li className='p-3 hover:bg-blue-600 hover:scale-100 hover:text-white rounded-md transition-all cursor-pointer text-base'>Hello</li>
        <li className='p-3 hover:bg-blue-600 hover:scale-100 hover:text-white rounded-md transition-all cursor-pointer text-base'>Hello</li>
        <li className='p-3 hover:bg-blue-600 hover:scale-100 hover:text-white rounded-md transition-all cursor-pointer text-base'>Hello</li>
        <li className='p-3 hover:bg-blue-600 hover:scale-100 hover:text-white rounded-md transition-all cursor-pointer text-base'>Hello</li>
      </ul>
{/*Search*/}
      <div className='relative hidden md:flex items-center justify-center gap-3'>
      <input className='px-3 py-2 text-base text-white bg-slate-300 rounded-xl pl-10 border-2 border-blue-500 focus:bg-slate-400 focus:outline-blue-500' type="text" placeholder='Search'/>
        <div className='absolute left-3 mt-1'><box-icon name='search-alt' color="blue"></box-icon></div>
        </div>

{/*Menu*/}
      <div className='xl:hidden block cursor-pointer' onClick={() => setisMenuopen(!isMenuopen)}>
      <box-icon name='menu-alt-right' color="blue" size="md"></box-icon>
      </div>

      <div className={`absolute xl:hidden w-full top-[75px] bg-slate-300 left-0 flex flex-col gap-4 py-4 items-center z-10 text-xl text-blue-500 transform transition-transform ${isMenuopen ? "block" : "hidden"}`}>
        <li className='w-full cursor-pointer hover:text-white hover:bg-blue-500 p-2 list-none rounded-xl text-center transition-all'>Hello</li>
        <li className='w-full cursor-pointer hover:text-white hover:bg-blue-500 p-2 list-none rounded-xl text-center transition-all'>Hello</li>
        <li className='w-full cursor-pointer hover:text-white hover:bg-blue-500 p-2 list-none rounded-xl text-center transition-all'>Hello</li>
        <li className='w-full cursor-pointer hover:text-white hover:bg-blue-500 p-2 list-none rounded-xl text-center transition-all'>Hello</li>
      </div>
    </header>
  )
}

export default Header