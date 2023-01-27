import React from 'react'
import IMG from '../assets/9.png'
import { TbCircleDotted } from 'react-icons/tb'


const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-bgColor flex flex-col justify-between py-10 drop-shadow-xl'>
            <div className='grid md:grid-cols-2 max-w-[1240] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <h3 className='text-txColor'>Hi, I'am</h3>
                    <h1 className='text-txColor text-5xl md:text-7xl font-bold'>Thomas Akiou</h1>
                    <h2 className='text-white text-2xl md:text-3xl'>Developer, Blogger, Freelancer</h2>
                    <h5 className='text-gray-300 pt-5'>This is my personal portfolio, check out what i can do.</h5>
                    <a href='#contact' className='btn btn-secondary mx-5 mt-14'><span>Click</span><span>Get in touch</span></a>
                </div>
                <div className= 'relative img-bg rounded-full w-80 h-80 md:mt-7 overflow-hidden m-auto'>
                    <img className='w-full' src={IMG} alt='/'/>                   
                </div>
                <TbCircleDotted className='spin text-txColor opacity-10 absolute z-50 w-[500px] h-[500px] top-[259px] right-[1px] md:w-[500px] md:h-[500px] md:top-[107px] md:right-[300px]'/>
            </div>  
            <div className='text-center font-bold text-txColor text-4xl md:text-8xl text-opacity-5 uppercase'>
                Thomas Ebimobowei Akiou
            </div> 
    </div>
  )
}

export default Home