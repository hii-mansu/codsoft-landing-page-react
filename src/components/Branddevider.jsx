import React from 'react'

const Branddevider = (props) => {
  return (
    <>
    <section>
        <div className='w-full h-auto py-[15px] overflow-hidden flex flex-wrap mx-auto bg-blue-700 items-center gap-[10%] mt-[60px]'>
            <img src={props.img1} alt="" className='w-[60px] h-[60px] mx-auto border-4 border-yellow-600 rounded-full hover:rotate-[60deg]'/>
            <img src={props.img2} alt="" className='w-[60px] h-[60px] mx-auto border-4 border-yellow-600 rounded-full hover:rotate-[60deg]'/>
            <img src={props.img3} alt="" className='w-[60px] h-[60px] mx-auto border-4 border-yellow-600 rounded-full hover:rotate-[60deg]'/>
            <img src={props.img4} alt="" className='w-[60px] h-[60px] mx-auto border-4 border-yellow-600 rounded-full hover:rotate-[60deg]'/>
            <img src={props.img5} alt="" className='w-[60px] h-[60px] mx-auto border-4 border-yellow-600 rounded-full hover:rotate-[60deg] hidden md:block'/>
        </div>
    </section>
    </>
  )
}

export default Branddevider