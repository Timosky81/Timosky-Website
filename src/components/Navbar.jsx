import { React, useState } from 'react'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import { ImMenu, ImCross } from 'react-icons/im'
import LOGO from '../assets/logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
        <div className='bg-navColor w-screen z-10 h-[60px] md:h-[80px] fixed pr-5'>
            <div className='flex px-2 justify-between items-center w-full h-full'>
                <div className='flex gap-40 item-center'>
                    <img src={LOGO} alt='logo' className='w-9 h-9 md:w-12 md:h-12 hover:transition-all hover:-translate-y-1 hover:scale-110' />

                    <ul className="hidden md:flex text-gray-400 font-bold">
                        <li className='hover:text-txColor'><a href='#home'>Home</a></li>
                        <li className='hover:text-txColor'><a href='#about'>About</a></li>
                        <li className='hover:text-txColor'><a href='#skill'>Skills</a></li>
                        <li className='hover:text-txColor'><a href='#portfolio'>Portfolio</a></li>
                    </ul>
                </div>
                
                <div className='hidden md:flex p-3 gap-5 text-txColor text-2xl'>
                      <a href='https://www.facebook.com/profile.php?id=100088224580735' target='_blank'  rel='noreferrer'><BsFacebook className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                      <a href='https://www.linkedin.com/in/thomas-akiou-45a51763/' target='_blank' rel='noreferrer'><BsLinkedin className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                       <a href='https://github.com/Timosky81' target='_blank' rel='noreferrer'><BsGithub className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                       <a href='https://twitter.com/AkiouThomas' target='_blank' rel='noreferrer'><FaTwitterSquare  className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                </div>                  
            
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <ImMenu className="text-txColor w-5"/> : <ImCross className='text-txColor w-5'/>}
                    
                </div>
            </div>
            <ul className= {!nav ? 'hidden' : 'absolute bg-bgColor w-full px-8 text-gray-400 font-bold'}>
                <li className='hover:text-txColor w-full' onClick={handleClick}><a href='#home'>Home</a></li>
                <li className='hover:text-txColor w-full' onClick={handleClick}><a href='#about'>About</a></li>
                <li className='hover:text-txColor w-full' onClick={handleClick}><a href='#skill'>Skills</a></li>
                <li className='hover:text-txColor w-full' onClick={handleClick}><a href='#portfolio'>Portfolio</a></li>

                <div className='flex gap-11 p-5 text-2xl justify-center text-txColor' onClick={handleClick}>
                  <a href='https://www.facebook.com/profile.php?id=100088224580735' target='_blank' rel='noreferrer'><BsFacebook className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                  <a href='https://www.linkedin.com/in/thomas-akiou-45a51763/' target='_blank' rel='noreferrer'><BsLinkedin className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                  <a  href='https://github.com/Timosky81' target='_blank' rel='noreferrer'><BsGithub className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                  <a  href='https://twitter.com/AkiouThomas' target='_blank' rel='noreferrer'><FaTwitterSquare className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                </div> 
            </ul> 
                    
        </div>


  )
}

export default Navbar