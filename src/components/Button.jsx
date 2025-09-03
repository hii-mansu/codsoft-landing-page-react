import React from 'react'

const Button = (props) => {
  return (
    <button className={'px-[10px] py-[5px] bg-yellow-600 text-white font-semibold rounded-2xl w-[100px] hover:scale-95 hover:text-gray-600 hover:bg-yellow-300'}>{props.btn}</button>
  )
}

export default Button