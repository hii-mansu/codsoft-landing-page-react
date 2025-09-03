import React from 'react'

const Mycard = (props) => {
  return (
    <>
    <div className='relative w-[250px] h-[320px] backdrop-blur-[20px] bg-white bg-opacity-[60%] hover:bg-opacity-[20%] rounded-xl shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] flex flex-col items-center gap-[15px] mx-auto mb-[70px]'>
        <div className='absolute top-[-15%] rounded-3xl overflow-hidden w-[200px] h-[140px] hover:rotate-12'>
        <img src={props.img} alt="cardimg"/>
        </div>
        <div className='mt-[40%] px-2'>
            <h3 className='text-[1.4rem] font-semibold border-b-2 border-yellow-600 text-blue-800'>{props.title}</h3>
            <p className='border-t-2 border-purple-900'>{props.pr}</p>
        </div>
        <button className='bg-blue-500 px-3 py-1 font-medium rounded-2xl hover:scale-95'>{props.btn}</button>
    </div>
    </>
  )
}

export default Mycard