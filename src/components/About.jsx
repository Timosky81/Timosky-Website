import React from 'react'
import ME from '../assets/tom3.png' 
import { GiLaurelCrown } from 'react-icons/gi'


const About = () => {
  return (
    <div id='about' className='w-full bg-navColor justify-between p-9 md:px-20 drop-shadow-xl'>

            <h2 className='text-gray-200 text-center'>Get to know more</h2>
            <h1 className='text-txColor text-center text-3xl md:text-4xl font-bold'>About me</h1>
            

                <div className='grid lg:grid-cols-2 m-auto pt-20'>  
                    <div className='m-auto about'>
                        <img src={ME} alt='/' className='about-me-image h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden'/>
                    </div>

                        <div className=''>
                                <div className='text-gray-300 text-xl py-8 md:text-left'>I am a performance driven and knowledgeable Computer Engineer and Information scientist with over seven years 
                                experience with an MSc in Computing & Information technology. Flexible to work remotely or on-site anywhere in the world.
                                </div>

                                <div className='flex gap-3 md:gap-12 justify-center border bg-bgColor shadow-2xl p-3 rounded-3xl'>
                                    <div>       
                                        <GiLaurelCrown className=' text-7xl md:text-9xl text-txColor text-opacity-50 m-auto'/> 
                                        <h4 className='text-gray-300 text-center font-bold'>Experience</h4>
                                        <h4 className='text-gray-300 text-center'>5+ yrs Working</h4>              
                                    </div> 
                                    <div>
                                        <GiLaurelCrown className=' text-7xl md:text-9xl text-txColor text-opacity-50 m-auto'/>
                                        <h4 className='text-gray-300 text-center font-bold'>Projects</h4>
                                        <h4 className='text-gray-300 text-center'>10+ Completed</h4> 
                                    </div> 
                                    <div>
                                        <GiLaurelCrown className=' text-7xl md:text-9xl text-txColor text-opacity-50 m-auto'/>
                                        <h4 className='text-gray-300 text-center font-bold'>Clients</h4>
                                        <h4 className='text-gray-300 text-center'>5+ Worldwide</h4> 
                                    </div>  
                                </div> 
                        </div>
                </div>
            <div className='text-center font-bold text-txColor text-2xl md:text-8xl text-opacity-5 uppercase'>
                Developer, Blogger, Freelancer
            </div>
    </div>
  )
}

export default About