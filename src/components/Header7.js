import React from 'react'
import tablish from '../assets/Tabish formal photo (1) 1.png'
import play from '../assets/play-circle-fill.png'
import avatar from '../assets/Avatar of team.png'
import symbol from '../assets/Symbol.png'
import left from '../assets/scroll buttion.png'
import right from '../assets/scroll buttion (1).png'
import down from '../assets/i.fa-solid.png'


const Header7 = () => {
  return (
    <div className='w-[1440px] h-[1719px] bg-gray-50 mt-[157.5px] flex flex-col items-center'>
        <div className=' flex flex-col items-center justify-center mt-[83px] gap-4'>
            <h1 className='w-[1040px] flex h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] justify-center'>What Our Pharma Partners Say</h1>
            <h3 className='w-[1040px] flex h-[36px] font-OpenSans font-normal leading-9 text-4xl justify-center'>Driving Transformations, One Brand at a Time</h3>
        </div>
       <div className='w-[1117px] h-[564px]  flex   items-center rounded-2xl pt-[50px] pl-[44px] pb-[50px] pr-[44px] mt-[64px] gap-[10px] shadow-5xl '>
        <div className='w-[1029px] h-[464px] gap-8 flex flex-row items-center justify-center'>
        <div className='w-[600px] h-[464px] rounded-2xl relative'>
        <img src={tablish} className='absolute w-[600px] h-[464px] rounded-2xl'></img>
        <img src={play} className='absolute w-[100px] h-[100px] ml-[252px] mt-[184.27px]'></img>
       </div>
       <div className='w-[397px] h-[285px] gap-[25px] flex items-center flex-col'>
        <div className='flex flex-row justify-between items-center w-[397px] h-[80px] '>
        <div className='w-[214px] h-[80px] gap-5 justify-between flex items-center '>
          
        <img src={avatar}></img>
        <div className='w-[114px] h-[27px] flex flex-row'>
        <h1 className='w-[116px] h-[27px] flex font-Poppins font-bold text-lg leading-[27px] '>Tabish Khan</h1>
        </div>

        </div>
        <img src={symbol} className='font-black text-[62px] leading-[62px] '></img>
        </div>
        <p className='w-[397px] flex justify-center items-center h-[180px] font-OpenSans font-normal text-2xl leading-9 '>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
       </div>
       </div>
       </div>
       <div className='mt-[39px]  w-[152px] flex  justify-center gap-8 items-center flex-row'>
        <img className='' src={left}></img>
        <img className='' src={right}></img>

       </div>


    <div className='w-[1280px] h-[576.75px] ml-[103px] flex flex-col items-center mt-[160px] gap-16'>
      <div className='w-[1030px] h-[136px] gap-4 flex items-center flex-col'>
        <h1 className='w-[1030px]  justify-center h-[48px] font-Montserrat  font-bold text-[32px] leading-[48px] items-center flex '>
        Frequently Asked Questions
        </h1>
        <p className='w-[984px] text-center h-[72px] font-OpenSans font-normal text-2xl leading-8 items-center flex'>
        Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.
        </p>
      </div>
      <div className='flex flex-col items-center w-[1280px] h-[376.75px] pt-[0px] pl-[240px] pb-[0px] pr-[240px]  '>
        <div className='shadow-text-shadow2 '>
          <div className=' justify-between flex flex-row w-[800px] h-[68px] pt-[20px] pl-[45px] pb-[20px] pr-[45px] gap-[10px] '>
          <div className=' flex flex-row w-[706px] h-[28px] gap-[219px]'>
          <h1 className='w-[474px] h-[28px] font-Montserrat font-semibold text-lg leading-7'>
          3. How does Osumare measure campaign success?
          </h1>
          <img src={down} className='h-[20px] w-[13px]'></img>
          </div>
          </div>
          <div className='justify-between flex flex-row w-[800px] h-[68px] pt-[20px] pl-[45px] pb-[20px] pr-[45px] gap-[10px] '>
          <div className=' flex flex-row w-[706px] h-[28px] gap-[219px]'>
          <h1 className='w-[474px] h-[28px] font-Montserrat font-semibold text-lg leading-7'>
          3. How does Osumare measure campaign success?
          </h1>
          <img src={down} className='h-[20px] w-[13px]'></img>
          </div>
          
   </div>
          <div>
          <div className='justify-between flex flex-col w-[800px] h-[68px] pt-[20px] pl-[45px] pb-[20px] pr-[45px] gap-[10px] shadow-text-shadow bg-blue-500'>
          <div className=' flex flex-row w-[706px] h-[28px] gap-[219px]'>
          <h1 className='w-[474px] h-[28px] font-Montserrat font-semibold text-lg leading-7'>
          3. How does Osumare measure campaign success?
          </h1>
          <img src={down} className='h-[20px] w-[13px]'></img>
          </div>
          </div>
          <div className='w-[800px] h-[172.75px] pt-[28px]  pl-[51px] flex items-center justify-center shadow-text-shadow2 pb-[27.75px] pr-[45px]'>
            <div className='w-[704px] h-[117px] items-center flex'>
              <p className='font-OpenSans text-colo font-normal leading-6 text-lg'>We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>

            </div>

          
          </div>
          </div>
          </div>
      </div>
    </div>


    </div>
  )
}

export default Header7