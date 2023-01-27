import React from 'react'
import { ImLocation } from 'react-icons/im'
import { FiPhoneCall } from 'react-icons/fi'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import { SiCircle } from 'react-icons/si'


const Contact = () => {
  return (
    <div id='contact' className='bg-bgColor justify-between p-3 md:p-14'>
            <h2 className='text-gray-200 text-center pt-10 md:pt-10'>Take out time to</h2>
            <h1 className='text-txColor text-center text-3xl md:text-4xl font-bold'>Contact me</h1> 

        <div>
            <section class="bg-white dark:bg-bgColor">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">For further enquiries, please send me an email or call me.</p>
                    <form action="https://api.web3forms.com/submit" method="POST" id="form" class="space-y-8">
                    
                    <input type="hidden" name="apikey" value="657ae191-451a-4ce8-b421-6221573d93e2" />

                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-txColor">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-txColor">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know what's on your mind" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-txColor">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-tx1Color rounded-lg bg-imgColor sm:w-fit hover:bg-transparent hover:text-txColor hover border-solid hover:border-2 hover-border-txColor">Send message</button>
                    </form>
                </div>
            </section>
            <SiCircle className=' text-txColor opacity-10 absolute z-40 w-[600px] h-[600px] right-[0px] top-[4000px]'/> 

            <div className='grid justify-items-center'>
                        <div className='py-12 md:flex gap-5 text-gray-400 text-center justify-items-center'>
                            <div className='text-center border-solid border-b-2 w-[300px] h-[200px] p-5'>
                                <ImLocation className='text-txColor text-6xl m-auto hover:transition-all hover:-translate-y-1 hover:scale-110'/>
                                <h1 className='text-2xl font-bold py-5'>Address:</h1>
                                <h2>19B Kaffin tella close, Minna, Niger State</h2>
                            </div>

                            <div className='text-center border-solid border-b-2 w-[300px] h-[200px] p-5'>                    
                                <FiPhoneCall className='text-txColor text-6xl m-auto hover:transition-all hover:-translate-y-1 hover:scale-110'/>
                                <h1 className='text-2xl font-bold py-5'>Call/Whatsapp:</h1>
                                <h2>+234 706-924-4957</h2>
                            </div>
                        </div>
                        
            </div>


            <div className='flex gap-11 p-5 text-4xl justify-center text-txColor'>
                    <a href='https://www.facebook.com/profile.php?id=100088224580735' target='_blank' rel='noreferrer'><BsFacebook className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                    <a href='https://www.linkedin.com/in/thomas-akiou-45a51763/' target='_blank' rel='noreferrer'><BsLinkedin className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                    <a  href='https://github.com/Timosky81' target='_blank' rel='noreferrer'><BsGithub className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
                    <a  href='https://twitter.com/AkiouThomas' target='_blank' rel='noreferrer'><FaTwitterSquare className='hover:text-gray-400 hover:transition-all hover:-translate-y-1 hover:scale-110'/></a>
            </div> 

            <div className='pt-8 justify-center text-txColor text-center'>
                <h1>Copywrite @ Timosky-2023</h1>
            </div> 

        </div>
    </div>
  )
}

export default Contact