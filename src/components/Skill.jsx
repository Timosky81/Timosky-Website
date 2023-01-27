import React from 'react'
import { ImHtmlFive2, ImCss3 } from 'react-icons/im'
import { TbBrandTailwind, TbBrandBootstrap } from 'react-icons/tb'
import { FaReact, FaPhp } from 'react-icons/fa'
import { SiMysql, SiWordpress, SiMicrosoftoffice, SiCraftcms, SiPowerbi } from 'react-icons/si'
import { BiTimeFive } from 'react-icons/bi'
import { BsShare,BsSpeedometer2 } from 'react-icons/bs'
import { MdOutlineMessage } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { SiCircle } from 'react-icons/si'



const Skill = () => {
  return (
    <div id='skill' className='bg-bgColor justify-between p-5 md:p-14 drop-shadow-xl'>
            <h2 className='text-gray-200 text-center pt-10 md:pt-14'>Here are some of</h2>
            <h1 className='text-txColor text-center text-3xl md:text-4xl font-bold'>My Skills</h1>      
                       
            <div className=''>
               <div className=' p-5 mt-10 rounded-2xl bg-navColor '>
                    <div className='grid md:flex md:flex-row-2 text-gray-300 place-content-center'>
                        <div className='p-5'>
                            <ImHtmlFive2 className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>HTML:</h2>
                           <div className=''>Experienced in building websites with html</div>
                        </div>


                        <div className='p-5'>
                            <ImCss3 className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>CSS:</h2>
                            <h3 className=''>Have used CSS for over 3 years</h3>
                        </div>


                        <div className='p-5'>
                            <TbBrandTailwind className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>Tailwind-CSS:</h2>
                            <h3 className=''>Have good knowledge of tailwind but built just one website with it so far</h3>
                        </div>


                        <div className='p-5'>
                            <FaReact className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>React-JS:</h2>
                            <h3 className=''>Have been using React-JS for over 2years</h3>
                        </div>
                        </div>
                    </div>
                </div>


                {/* ///////////////////////// CARD TWO ///////////////////////////// */}


                    <div className='grid md:flex md:flex-row-2 p-5 mt-10 rounded-2xl text-gray-300 bg-navColor place-content-center'>

                                <div className='p-5'>
                                    <FaPhp className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>PHP:</h2>
                                    <h3 className=''>Started using PHP since 2018</h3>
                                </div>

                                <div className='p-5'>
                                    <SiMysql className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>My-SQL:</h2>
                                    <h3 className=''>Experienced in using My-SQL queries</h3>
                                </div>

                                <div className='p-5'>
                                    <SiWordpress className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>Wordpress:</h2>
                                    <h3 className=''>Good working knowledge with wordpress templates with elemento</h3>
                                </div>

                                <div className='p-5'>
                                    <SiCraftcms className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>CMS:</h2>
                                    <h3 className=''>Experienced in using CMS such as Goodbabber & Blogspot for mobile app and website development</h3>
                                </div>

                    </div>

                    <SiCircle className='spin text-txColor opacity-5 absolute -z-40 w-[900px] h-[900px] right-[300px] top-[300px]'/>

                        {/* //////////////// CARD THREE ///////////////////////// */}

                        <div className='grid md:flex md:flex-row-2 p-5 mt-10 rounded-2xl text-gray-300 bg-navColor place-content-center'>

                                <div className='p-5'>
                                    <TbBrandBootstrap className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>Bootsrap:</h2>
                                    <h3 className=''>Experienced in using bootstrap-5 framework in building responsive websites</h3>
                                </div>

                                <div className='p-5'>
                                    <SiMicrosoftoffice className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>MS Office:</h2>
                                    <h3 className=''>Very experienced in using microsoft packages like MS-word, Excel, Power-point, Project and Access providing solutions</h3>
                                </div>

                                <div className='p-5'>
                                    <SiPowerbi className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>Power BI:</h2>
                                    <h3 className=''>Good at using Power-BI for data manipulation, analysis and presentation</h3>
                                </div>

                                <div className='p-5'>
                                    <AiOutlineFundProjectionScreen className='text-5xl'/>
                                    <h2 className='text-md font-bold pt-3 text-txColor'>Project Management:</h2>
                                    <h3 className=''>Developing my project management skills by using tools like JIRA in delivering projects in time and with budget</h3>
                                </div>

                        </div>




                        {/* //////////////// CARD FOUR ///////////////////////// */}

                <div className='grid md:flex md:flex-row-2 p-5 mt-10 rounded-2xl text-gray-300 bg-navColor place-content-center'>

                        <div className='p-5'>
                            <BiTimeFive className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>Time management:</h2>
                            <h3 className=''>Experienced in delivering projects on time, multitask and solve problems.</h3>
                        </div>

                        <div className='p-5'>
                            <BsShare className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>Social Media:</h2>
                            <h3 className=''>Experienced in technical requirements of social media platforms & develop modern strategies for better service delivery</h3>
                        </div>

                        <div className='p-5'>
                            <MdOutlineMessage className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>Communication:</h2>
                            <h3 className=''>Experienced in passing knowledge and explaining my work to other technical and non-technical members of the team</h3>
                        </div>

                        <div className='p-5'>
                            <BsSpeedometer2 className='text-5xl'/>
                            <h2 className='text-md font-bold pt-3 text-txColor'>Quick Learner:</h2>
                            <h3 className=''>Fast learner with a keen eye for details with an excellent ability to grasp new concepts</h3>
                        </div>

                </div>

       
    </div>
  )
}

export default Skill