import React from 'react'
import Mycard from './Mycard'

const Cardsection = () => {
  return (
    <>
    <section className='relative bg-blue-400'>
      <div className='absolute h-[70%] w-[60%] bg-pink-600 rounded-full blur-[100px] top-[20%] left-[20%] opacity-[90%]'></div>
      <div className='max-w-[1300px] mx-auto px-3 pt-8 flex flex-col gap-[100px]'>
        <div className='text-center'>
          <h2 className='text-white text-[2.2rem] font-bold'>Title Of Card Section</h2>
          <p className='leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        <div className='flex flex-wrap gap-[5%]'>
        <Mycard title="Write the 1st title" pr="lorem dgeb vgneg ei eneine enev eie g 11111" img={`https://i.ibb.co/dpFW2zn/freepik-export-202405091906499o-BT.png`} btn="Button 1"/>
        <Mycard title="Write the 2st title" pr="lorem dgeb vgneg ei eneine enev eie g 22222" img={`https://i.ibb.co/dpFW2zn/freepik-export-202405091906499o-BT.png`} btn="Button 2"/>
        <Mycard title="Write the 3st title" pr="lorem dgeb vgneg ei eneine enev eie g 33333" img={`https://i.ibb.co/dpFW2zn/freepik-export-202405091906499o-BT.png`} btn="Button 3"/>
        <Mycard title="Write the 4st title" pr="lorem dgeb vgneg ei eneine enev eie g 44444" img={`https://i.ibb.co/dpFW2zn/freepik-export-202405091906499o-BT.png`} btn="Button 4"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Cardsection