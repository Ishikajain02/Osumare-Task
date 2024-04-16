import React from 'react'
import logo from '../assets/logo.jpg'
const Nav = () => {
  return (
    <div className='w-full h-[108px] pt-[8px] pb-[0px] pl-[80px] pr-[80px] flex bg-white justify-between items-center'>
        <img src={logo} className='w-[172px] h-[100px]'></img>
    
         <button className='p-3 w-[168px] h-[24px] flex justify-center items-center border-2 border-black rounded-3xl font-bold'>Contact Us</button>
    </div>
  )
}

export default Nav