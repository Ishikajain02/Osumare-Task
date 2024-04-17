import React from 'react'
import icon4 from '../assets/icon (4).png'
import icon5 from '../assets/icon (5).png'
import icon6 from '../assets/icon (6).png'
import icon7 from '../assets/icon (7).png'
const Header6 = () => {
  return (
    <div>
        <div>
        <div className=' w-[1280px] h-[1102px] mt-[160px] ml-[80px] gap-16'>
        <div className='h-[575px] gap-16'>
            <h1 className='h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] flex justify-center'>Driving Property Inquiries to Conversions</h1>
            <div className='h-[463px] gap-[35px] flex flex-row mt-[64px]'>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                    <img src={icon4} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Call-to-Action Optimization</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                    </div>
                    
                </div>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                <img src={icon5} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Landing Page Efficiency</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                    </div>
                </div>
            </div>
            <div className='h-[463px] gap-[35px] flex flex-row mt-[64px]'>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                    <img src={icon6} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Social Proof Utilization</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.</p>
                    </div>
                    
                </div>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                <img src={icon7} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Mobile-Friendly Experience</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        <div className='h-[275px] w-[779px] ml-[331px] gap-8 mt-[157.5px] flex items-center flex-col'>
            <div className='h-[182px] flex items-center justify-center flex-col'>
                <h1 className='h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] flex justify-center items-center'>Your Peace of Mind</h1>
                <p className='h-[118px] font-OpenSans text-center font-normal text-2xl leading-9 flex justify-center items-center'>Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market</p>

             {/*correction required*/}

            
            </div>
            <button className='w-[233px] h-[61px] pt-[16.5px] pl-[64px] pb-[16.5px] pr-[64px] bg-blue-500 rounded-[32px] gap-1 text-white'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Header6