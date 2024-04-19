import React from 'react'

const Header8 = () => {
  return (
    <div className='w-[1440px] h-[900px] mt-[160px] flex flex-col items-center justify-center '>
        <div className='w-[752px] h-[136px] mt-[143px]  gap-4 flex flex-col items-center justify-center'>
        <h1 className='w-[752px] h-[48px] font-Montserrat font-extrabold text-[32px] leading-[48px] flex items-center justify-center'>Connect with Our Digital Marketing Experts</h1>
        <h3 className='w-[752px] h-[72px] font-OpenSans font-normal text-2xl leading-9 flex items-center text-center'>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</h3>

        </div>
        <div className='w-[904px] flex flex-col items-center shadow-4xl h-[424px] mt-[63.5px] rounded-2xl pt-[32px] pl-[56px] pb-[32px] pr-[56px] gap-8'>
         <div className='w-[792px] h-[360px] gap-8 flex flex-col items-center'>
            <div className='h-[272px] gap-8 flex flex-row'>
                <div className='w-[380px] h-[272px] gap-4 justify-between flex flex-col'>
                <div className='w-[380px] h-[80px] gap-3'>
                <h1 className='w-[45px] h-[24px] font-Inter font-semibold leading-6 items-center flex text-base'>Name</h1>
                <input className='w-[380px] h-[44px] rounded border-[1px] pt-[8px] pl-[12px] pb-[8px] pr-[12px] gap-[10px] bg-colo font-Inter font-normal text-base leading-7 ' placeholder='Enter your Name'></input>



                </div>
                <div className='w-[380px] h-[80px] gap-3'>

                <h1 className='w-[45px] h-[24px] font-Inter font-semibold leading-6 items-center flex text-base'>Phone</h1>
                <input className='w-[380px] h-[44px] rounded border-[1px] pt-[8px] pl-[12px] pb-[8px] pr-[12px] gap-[10px] bg-colo font-Inter font-normal text-base leading-7 ' placeholder='Enter your Phone'></input>



                </div>
                <div className='w-[380px] h-[80px] gap-3'>
                <h1 className='w-[45px] h-[24px] font-Inter font-semibold leading-6 items-center flex text-base'>Email</h1>
                <input className='w-[380px] h-[44px] rounded border-[1px] pt-[8px] pl-[12px] pb-[8px] pr-[12px] gap-[10px] bg-colo font-Inter font-normal text-base leading-7 ' placeholder='Total No of Vehicles'></input>



                </div>
                </div>
                <div className='w-[380px] h-[248px] gap-8'>
                    <div>
                        <h1 className='w-[71px] h-[24px] font-Inter font-semibold leading-6 items-center text-base'>Message</h1>
                        <input className='w-[380px] h-[235px] rounded border-[1px] pt-[8px] pl-[12px] pb-[8px] pr-[12px] gap-[10px] bg-co ' placeholder='Enter your message'></input>
                    </div>
                </div>

            </div>
            <button className='w-[408px] h-[56px] rounded-[32px] pt-[13px] pl-[136px] pb-[13px] pr-[136px] bg-blue-500 text-white flex '>
              Get Started
            </button>
         </div>
        </div>
    </div>
  )
}

export default Header8