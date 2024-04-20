import React from 'react'
import logo from '../assets/logo.jpg'
import vector from '../assets/Vector.png'
import vector1 from '../assets/Vector (1).png'
import icon1 from '../assets/pinterest-fill.png'
import icon2 from '../assets/pinterest-fill (1).png'
import icon3 from '../assets/pinterest-fill (2).png'
import icon4 from '../assets/pinterest-fill (3).png'
import icon5 from '../assets/whatsapp-fill.png'
import icon6 from '../assets/whatsapp-fill (1).png'
const Footer = () => {
  return (

    <div className='w-[1280px] h-[713px]   gap-8 mt-[96px] flex flex-col items-center'>
     
        <div className='w-[1280px] h-[657px]  bg-blue-100  rounded-[32px] linear-gradient-b flex justify-normal'>
        <div className='flex flex-row w-[1280px] h-[657px] rounded-[32px] justify-between'>
          <div className='flex flex-col'>
            <div className='w-[365px] flex flex-col h-[160px] mt-[56px] ml-[43px] gap-4'>
                <img src={logo} className='w-[124.2px] h-[72px] rounded-[4px]'></img>
                <p className='w-[365px] h-[72px] font-OpenSans font-normal text-base leading-6'>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
            </div>
            <div className='mt-[47px] w-[196px] flex flex-col h-[131px] ml-[43px] gap-2'>
                <h1 className='w-[79px] h-[27px] font-Montserrat text-lg font-bold tracking-letter items-center flex'>Address</h1>
                <p className='w-[196px] h-[96px] font-OpenSans font-normal  text-base leading-6'>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
           
            </div>
            <div className='mt-[32px] flex flex-col w-[192px] h-[124px] ml-[43px] gap-6'>
            <h1 className='w-[108px] h-[36px] font-Inter font-bold text-2xl leading-9'>Contacts</h1>
            <div className='w-[192px] h-[64px] gap-4 '>{/*padding is missing*/}
              <div className='w-[192px] h-[24px] gap-2 flex flex-row'>
                <img src={vector} className='w-[20px] h-[18px] mt-[3px] ml-[2px]'></img>
                <p className='w-[160px] h-[24px] font-OpenSans font-normal text-base leading-6'>hello@osumare.in</p>
              </div>
              <div className='w-[192px] h-[24px] gap-2 flex flex-row'>
              <img src={vector1} className='w-[20px] h-[18px] mt-[3px] ml-[2px]'></img>
                <p className='w-[160px] h-[24px] font-OpenSans font-normal text-base leading-6'>+91 8459 8762 26</p>
              </div>
              </div>
            </div>
            </div>
        
        <div className='w-[72px] h-[304px] flex flex-col  mt-[56px] ml-[245px] gap-8 '>
          <h1 className='w-[72px] h-[48px] font-Montserrat font-bold text-2xl leading-[48px] items-center flex'>Menu</h1>
          <div className='w-[67px] h-[224px] gap-4  flex flex-col'>
            <p className='font-OpenSans font-medium text-base leading-6 flex '>Home</p>
            <p className='font-OpenSans font-medium text-base leading-6 flex '>About</p>
            <p className='font-OpenSans font-medium text-base leading-6 flex '>Services</p>
            <p className='font-OpenSans font-medium text-base leading-6 flex '>Work</p>
         
          </div>
     
     
        </div>
        <div className='w-[280px] h-[176px] flex flex-col ml-[240px] gap-6 mt-[56px]'>
        <h1  className='w-[75px]  ml-[4px] h-[48px] font-Montserrat font-bold text-2xl leading-[48px] '>Social</h1>
        <div className='w-[280px] h-[104px] flex flex-col gap-6 '>
          <div className='flex flex-row space-x-2'>
        <img src={icon1} className=' w-[40px] h-[40px] rounded-[32px]'></img>
        <img src={icon2} className='w-[40px] h-[40px] rounded-[32px] '></img>
        <img src={icon3} className='w-[40px] h-[40px] rounded-[32px] '></img>
        <img src={icon4} className='w-[40px] h-[40px] rounded-[32px]'></img>
        </div>
        <div className='flex flex-row space-x-2'>
        <img src={icon5} className='w-[40px] h-[40px] rounded-[32px]'></img>
        <img src={icon6} className='w-[40px] h-[40px] rounded-[32px]'></img>
        </div>
        
        </div>


        </div>
        </div>
        </div>
        <h3 className='w-[314px] h-[24px] font-Montserrat justify-content font-medium text-base leading-6 tracking-letter'>© 2023 Osumare. All rights reserved.</h3>
 
    </div>
  )
}

export default Footer