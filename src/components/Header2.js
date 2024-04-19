import React from 'react'
import arrow from '../assets/arrow.png'
const Header2 = () => {
  return (
    <div className='flex flex-col'>
    <div className=' flex w-[839px] h-[48px] mt-[121px] ml-[301px] justify-center'>
          <p className='font-Montserrat font-bold text-[32px] leading-[48px] '>
          Real Estate-Focused Digital Mastery
          </p>
        </div>
        <div className='flex flex-row'>
            <img src={arrow} className='w-[507.12px] h-[342px] mt-[83px]'></img>
            <div className='w-[733px] h-[385px] ml-[39.88px] mt-[64px] gap-8'>
                <p className='font-Montserrat w-[646px] h-[96px] font-bold text-[32px] leading-[48px]'>Unlock the Potential of Digital Real Estate Excellence</p>
                <p className='w-[733px] h-[180px] font-OpenSans font-normal text-2xl leading-9'>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
                <button className='h-[61px] w-[233px] mt-[32px] rounded-[32px] gap-1 bg-blue-500 text-white'><span className='font-Montserrat font-semibold text-lg leading-7 items-center flex justify-center'>Get Started</span></button>
            </div>   
        </div>
        </div>
  )
}

export default Header2