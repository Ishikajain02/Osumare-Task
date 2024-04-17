import React from 'react'
import tablish from '../assets/Tabish formal photo (1) 1.png'
import play from '../assets/play-circle-fill.png'
const Header7 = () => {
  return (
    <div className='w-[1440px] h-[1719px] mt-[157.5px] '>
        <div className=' flex flex-col items-center justify-center'>
            <h1 className='w-[1040px] flex h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] justify-center'>What Our Pharma Partners Say</h1>
            <h3 className='w-[1040px] flex h-[36px] font-OpenSans font-normal leading-9 text-4xl justify-center'>Driving Transformations, One Brand at a Time</h3>
        </div>
       <div className='w-[1117px] h-[564px] ml-[162px] flex flex-row  items-center rounded-2xl pt-[50px] pl-[44px] pb-[50px] pr-[44px] mt-[64px] gap-[10px] '>
        <div>
        <img src={tablish} className='w-[600px] h-[464px] rounded-2xl'></img>
        <img src={play} className='w-[100px] h-[100px] ml-[252px] mt-[184.27px]'></img>
       </div>
       </div>
    </div>
  )
}

export default Header7