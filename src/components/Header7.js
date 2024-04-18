import React from 'react'
import tablish from '../assets/Tabish formal photo (1) 1.png'
import play from '../assets/play-circle-fill.png'
import avatar from '../assets/Avatar of team.png'
import symbol from '../assets/Symbol.png'
const Header7 = () => {
  return (
    <div className='w-[1440px] h-[1719px] mt-[157.5px] '>
        <div className=' flex flex-col items-center justify-center mt-[83px] gap-4'>
            <h1 className='w-[1040px] flex h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] justify-center'>What Our Pharma Partners Say</h1>
            <h3 className='w-[1040px] flex h-[36px] font-OpenSans font-normal leading-9 text-4xl justify-center'>Driving Transformations, One Brand at a Time</h3>
        </div>
       <div className='w-[1117px] h-[564px] ml-[162px] flex   items-center rounded-2xl pt-[50px] pl-[44px] pb-[50px] pr-[44px] mt-[64px] gap-[10px] shadow-5xl '>
        <div className='w-[1029px] h-[464px] gap-8 flex flex-row'>
        <div className='w-[600px] h-[464px] rounded-2xl '>
        <img src={tablish} className='w-[600px] h-[464px] rounded-2xl'></img>
        <img src={play} className='w-[100px] h-[100px] ml-[252px] mt-[184.27px]'></img>
       </div>
       <div className='w-[397px] h-[285px] gap-[25px]'>
        <div className='flex flex-row justify-between items-center w-[397px] h-[80px] '>
        <div className='w-[214px] h-[80px] gap-5 justify-between flex items-center '>
          
        <img src={avatar}></img>
        <div className='w-[114px] h-[27px] flex flex-row'>
        <h1 className='w-[116px] h-[27px] flex font-Poppins font-bold text-lg leading-[27px] '>Tabish Khan</h1>
        </div>

        </div>
        <img src={symbol} className='font-black text-[62px] leading-[62px] '></img>
        </div>
        <p></p>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Header7