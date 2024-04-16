import React from 'react'
import header1 from '../assets/Header image.png'

const Header1 = () => {
  return (
    <div className='items-center'>
    <div className='flex flex-col w-[899px]    gap-8 mt-[183.5px] ml-[271px] items-center'>
    <div className='w-[899px]  flex flex-col height-[284px]  items-center'>
        <span className=' font-Montserrat flex font-medium leading-[72px]  items-center text-5xl line-height-72 '>Elevate Real Estate Success with Osumare's Digital Expertise</span>
        
       <span className='flex flex-col'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</span>
       <button className=' flex w-[408px] h-[56px] rounded-[32px] gap-1 pt-[13px] pr-[136px] pb-[13px] pl-[136px] bg-colour2 '>Get Started</button>
   
    </div>
    
  
    </div>
    <img src={header1} className='flex mt-[83.5px] ml-[322px] h-[538px] w-[796px] '></img>
  </div>
  
  )
}

export default Header1