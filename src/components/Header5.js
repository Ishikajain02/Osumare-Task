import React from 'react'
import bro from '../assets/bro.png'
import icon from '../assets/icon.png'
import icon1 from '../assets/icon (1).png'
import icon2 from '../assets/icon (2).png'
import icon3 from '../assets/icon (3).png'
const Header5 = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-[108px] w-[1278px] gap-4 ml-[81px] mt-[208px] '>
            <h1 className='w-[1278px] h-[48px] items-center justify-center flex font-Montserrat font-bold leading-[48px] text-[32px]'> Driving Property Inquiries to Conversions</h1>
            <p className='w-[1278px] h-[44px] items-center justify-center flex font-OpenSans text-2xl leading-9 font-normal'>Streamlined Strategies for Real Estate Success</p>

        </div>
        <div className='w-[1280px] h-[400px] flex flex-row  ml-[81px] gap-[98px] mt-[64px]'>
        <img src={bro} className='w-[500px] h-[400px]'></img>
        <div className='w-[682px] h-[373px] gap-8'>
            <h1 className='w-[682px] h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] '>Optimized Path to Property Purchase</h1>
            <p className='font-OpenSans w-[682px] h-[216px] font-normal text-2xl leading-9'>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
            <button className=' flex w-[233px] h-[61px] rounded-[32px] pt-[16.5px] pl-[64px] pb-[16.5px] pr-[64px] bg-blue-500 items-center justify-center '><span className='w-[105px]  justify-center h-[28px] font-Montserrat text-white flex  font-semibold text-lg leading-7 items-center'>Get Started</span></button>
        {/* correction needed*/}
        </div>
        </div>
        <div className=' w-[1280px] h-[1102px] mt-[64px] ml-[80px] gap-16'>
        <div className='h-[575px] gap-16'>
            <h1 className='h-[48px] font-Montserrat font-bold text-[32px] leading-[48px] flex justify-center'>Driving Property Inquiries to Conversions</h1>
            <div className='h-[463px] gap-[35px] flex flex-row mt-[64px]'>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                    <img src={icon} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Call-to-Action Optimization</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                    </div>
                    
                </div>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                <img src={icon1} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Landing Page Efficiency</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                    </div>
                </div>
            </div>
            <div className='h-[463px] gap-[35px] flex flex-row mt-[64px]'>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                    <img src={icon2} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Social Proof Utilization</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.</p>
                    </div>
                    
                </div>
                <div className='w-[621px] h-[463px] gap-[29px] items-center flex flex-col'>
                <img src={icon3} className='w-[190px] h-[190px]'></img>
                    <div className='w-[621px] h-[172px] gap-4 flex flex-col items-center'>
                    <h1 className='font-Montserrat font-bold text-2xl leading-[48px] flex justify-center'>Mobile-Friendly Experience</h1>
                    
                    <p className='w-[621px] h-[108px] font-OpenSans font-normal text-2xl leading-9 flex justify-center text-center'>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Header5