import React from 'react'
import ServiceCard from './ServiceCard'

const Header3 = () => {
  return (
    <div className='w-[1440px] flex flex-col items-center h-[997px] bg-unique justify-center gap-[10px] mt-[232.5px] pt-[91px] pr-[81px] pb-[91px] pl-[81px]'>
        <div className='w-[1278px] h-[815px] items-center flex flex-col gap-[68px] '>
        <div className='w-[1278px] h-[108px] gap-[16px]  flex flex-col justify-center items-center'>
            <h1 className='w-[1278px] justify-center flex font-Montserrat font-bold text-[32px] leading-[48px] '>Our Service Offerings</h1>
            <h1 className='w-[1278px] h-[44px] font-OpenSans flex justify-center font-normal text-2xl leading-[36px] '>Strategies that Drive Property Market Excellence</h1>
        
        </div>
        <div className='w-[1278px] h-[510px] gap-[30px]'>
        <div><ServiceCard/>
        </div>
       
        </div>
        <button className='w-[233px] h-[61px] rounded-[32px] pt-[16.5px] pr-[64px] pb-[16.5px] pl-[64px] gap-1 bg-blue-500 text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Header3