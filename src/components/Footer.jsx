import React from 'react'
import 'boxicons'

const Footer = () => {
  return (
    <section className='border-t-4 border-t-black mt-[100px] border-opacity-[70%]'>
        <div className='max-w-[1300px] mx-auto flex flex-col gap-4 px-[21px] py-[15px]'>
            <div className='flex flex-wrap gap-[20px] justify-evenly'>
                <ul className='flex flex-col gap-[15px] text-[0.9rem] text-gray-600 font-light min-w-[150px] mx-auto'>
                    <h4 className='text-blue-700 text-[1.3rem] font-semibold max-w-[120px] border-b-2 border-b-blue-700'>Links</h4>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                </ul>

                <ul className='flex flex-col gap-[15px] text-[0.9rem] text-gray-600 font-light min-w-[150px] mx-auto'>
                <h4 className='text-blue-700 text-[1.3rem] font-semibold max-w-[120px] border-b-2 border-b-blue-700'>Links</h4>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                </ul>

                <ul className='flex flex-col gap-[15px] text-[0.9rem] text-gray-600 font-light min-w-[150px] mx-auto'>
                    <h4 className='text-blue-700 text-[1.3rem] font-semibold max-w-[120px] border-b-2 border-b-blue-700'>Links</h4>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                </ul>

                <ul className='flex flex-col gap-[15px] text-[0.9rem] text-gray-600 font-light min-w-[150px] mx-auto'>
                    <h4 className='text-blue-700 text-[1.3rem] font-semibold max-w-[120px] border-b-2 border-b-blue-700'>Links</h4>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                <li><a href="#">Link xyz</a></li>
                </ul>

                <div className='flex flex-row gap-2 justify-evenly items-center'>
                <box-icon type='logo' name='instagram-alt' size='md'></box-icon>
                <box-icon name='facebook-circle' type='logo' size='md'></box-icon>
                <box-icon name='whatsapp-square' type='logo' size='md'></box-icon>
                <box-icon name='twitter' type='logo' size='md'></box-icon>
                </div>
            </div>
            <div className='flex flex-wrap justify-between gap-[50px] text-gray-900 text-[1rem] font-normal border-t-2 border-t-blue-700 py-[15px] items-center'>
                <p className='text-center mx-auto'>Lirem copyright 2024 xyz</p>
                <ul className='flex flex-row gap-[10px] justify-around mx-auto'>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer