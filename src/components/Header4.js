import React from 'react'
import header4 from '../assets/header4.png'
import  star from '../assets/star.png'
import safeguard from '../assets/safeguard.png'
import search from '../assets/search.png'
import lighting from '../assets/lighting.png'
const Header4 = () => {
  return (
    <div className=''>
        <div className=' items-center flex  flex-col justify-center mt-[157.5px] h-[108px] w-[1278px]  gap-4'>
            <h1 className='font-Montserrat font-bold text-[32px] flex leading-[48px] items-center'>
            Navigating Real Estate's Digital Landscape
            </h1>
            <h1 className='w-[1278px] h-[44px] justify-center flex font-OpenSans font-normal text-2xl leading-9 items-center '>
            Insights for Real Estate Marketing Advantage
            </h1>
        </div>
        <div className='mt-[64px] ml-[80px] w-[1280px] h-[736px] items-center flex flex-row '>
            <div className='w-[586px] h-[660px] gap-4 flex flex-col' >
                <div className='w-[586px] flex flex-row h-[153px] rounded-2xl border-[1px] p-8 gap-4 '>
                    <img src={star} className='w-[52px] h-[52px]'></img>
                    <div className='w-[454px] h-[64px] gap-2'>
                        <h1 className='h-[32px] font-semibold text-2xl leading-[31.2px] font-Poppins'>Market Trends Analysis</h1>
                        <p className='h-[24px] font-normal leading-6 font-Inter text-base tracking-custom'>Predictive insights to guide real estate strategies.</p>
                    </div>
                </div>
                <div className='w-[586px] h-[153px] flex flex-row  rounded-2xl border-[1px] p-8 gap-4'>
                <img src={lighting} className='w-[52px] h-[52px]'></img>
                    <div className='w-[454px] h-[64px] gap-2'>
                        <h1 className='h-[32px] font-semibold text-2xl leading-[31.2px] font-Poppins'>Targeted Buyer Persona</h1>
                        <p className='h-[24px] font-normal leading-6 font-Inter text-base tracking-custom'>Understand and connect with your ideal property buyers.</p>
                    </div>
                </div>
                <div className='w-[586px] flex flex-row h-[153px] rounded-2xl border-[1px] p-8 gap-4'>
                <img src={safeguard} className='w-[52px] h-[52px]'></img>
                    <div className='w-[454px] h-[64px] gap-2'>
                        <h1 className='h-[32px] font-semibold text-2xl leading-[31.2px] font-Poppins'>Competitor Insights</h1>
                        <p className='h-[24px] font-normal leading-6 font-Inter text-base tracking-custom'>Stand out in the property market with informed strategies.</p>
                    </div>
                </div>
                <div className='w-[586px] h-[153px] flex flex-row rounded-2xl border-[1px] p-8 gap-4'>
                <img src={search} className='w-[52px] h-[52px]'></img>
                    <div className='w-[454px] h-[64px] gap-2'>
                        <h1 className='h-[32px] font-semibold text-2xl leading-[31.2px] font-Poppins'>Visual Content Appeal</h1>
                        <p className='h-[24px] font-normal leading-6 font-Inter text-base tracking-custom'>Captivate buyers with appealing visuals and immersive experiences.</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[793px] h-[736px] rounded-[32px]' src={header4}></img>
               {/*image not overlapping*/}
         
            </div>
        </div>
    </div>
  )
}

export default Header4