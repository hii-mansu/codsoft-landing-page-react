import React from 'react'
import Button from './Button'

const Hero2 = () => {
  return (
    <>
    <section>
        <div className='mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between gap-[50px]'>
            <div>
                <img src="https://i.ibb.co/dpFW2zn/freepik-export-202405091906499o-BT.png" alt="Hero 2" className='rounded-t-full w-[60%] md:w-[85%] mx-auto p-[50px] border-b-4 border-yellow-600' />
            </div>
            <div className='flex flex-col gap-[50px] justify-center mx-auto px-[10%]'>
                <div className='flex flex-col gap-[20px] max-w-[80%]'>
                <span className='rounded-2xl bg-blue-800 bg-opacity-[70%] text-[1.3rem] text-white font-bold px-[10px] py-[5px] self-start'>Keyword👋</span>
                <h2 className='text-blue-600 font-semibold text-[2rem]'>Title Of This Section</h2>
                <p className='text-gray-700 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora praesentium tempore quas accusamus qui at!</p>
                </div>
                <div className='flex gap-[10%]'><Button btn="Button 1"/><Button btn="Button 2"/></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero2