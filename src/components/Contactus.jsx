import React from 'react'
import Button from './Button'

const Contactus = () => {
  return (
    <section>
        <div className='bg-black max-w-[80%] h-auto flex flex-col md:flex-row justify-center mx-auto mt-[60px] rounded-2xl overflow-hidden'>
            <div className='bg-blue-800 text-center flex flex-col justify-center w-full px-[20px] py-[40px]'>
                <h3 className='text-[2rem] text-yellow-600 font-semibold mb-[50px] border-b-2 max-w-[210px] mx-auto'>Contact Info</h3>
                <p>💌Email@gmail.com</p>
                <p>📞 +91 9453xxxx60</p>
                <p className='text-gray-400 max-w-[70%] mx-auto'>Lorem, ipsum. 22150x Lorem ipsum dolor sit amet consectetur. india.</p>
            </div>
            <div className='bg-slate-600 w-full flex flex-col items-center px-[20px] py-[40px]'>
                <h3 className='text-blue-500 text-[2rem] font-semibold mb-4'>Reach Us!</h3>
                <div className='flex flex-col gap-[15px] relative'>
                    <input type="text"  placeholder='Name' className='h-[40px] w-[100%] bg-white outline-none text-[1.2rem] text-black pl-[10px] rounded-xl'/>
                    <input type="email"  placeholder='Email' className='h-[40px] w-[100%] bg-white outline-none text-[1.2rem] text-black pl-[10px] rounded-xl'/>
                    <input type="number" min="10" max="10"  placeholder='Number' className='h-[40px] w-[100%] bg-white outline-none text-[1.2rem] text-black pl-[10px] rounded-xl'/>
                    <textarea name="" id="" placeholder='Message' className='h-[200px] w-[100%] bg-white outline-none text-[1.2rem] text-black pl-[10px] rounded-xl'></textarea>
                    <div className='absolute bottom-[10px] left-[30%]'><Button btn="Submit"/></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactus