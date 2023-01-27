import React, {useState} from 'react'
import IMG1 from '../assets/tommy.png'
import IMG2 from '../assets/timosky.png'
import IMG3 from '../assets/dpa.png'
import IMG4 from '../assets/lit.png'
import IMG5 from '../assets/tom4.png'
import IMG13 from '../assets/coming1.png'
import IMG14 from '../assets/coming2.jpg'
import { TbWorldDownload } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'


// Array method 

const data1 = [
  
  {
    id: 1,
    image: IMG1,
    title: 'Personal Website',
    tech1: 'React',
    tech2: 'CSS',
    tech3: 'Material-UI',
    tech4: '',
    github: 'https://github.com/Timosky81/My-personal-Website.git',
    demo: 'https://thomasakiou.netlify.app'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Timosky personal blog',
    tech1: 'Wordpress',
    tech2: 'Elemento',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: 'http://timoskyblog.unaux.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Dynamic Peoples Association',
    tech1: 'PHP',
    tech2: 'My-SQL',
    tech3: 'CSS',
    tech4: 'HTML',
    github: 'https://github.com/Timosky81/Dynamic-WebApp.git',
    demo: 'https://dynamicpeople.000webhostapp.com/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Lit-Tube',
    tech1: 'React', 
    tech2: 'CSS',
    tech3: 'Rapid API',
    tech4: '',
    github: 'https://github.com/Timosky81/My-Lit-Youtube-Project',
    demo: 'https://littube.netlify.app/'
  },

]

// Array method 

const data2 = [
  
  {
    id: 1,
    image: IMG5,
    title: 'Timosky Personal Website',
    tech1: 'React',
    tech2: 'Tailwind CSS',
    tech3: '',
    tech4: '',
    github: 'https://github.com/Timosky81/Timosky-Website',
    demo: 'https://timosky.netlify.app/'
  },

  {
    id: 2,
    image: IMG13,
    title: 'Title of my project here',
    tech1: 'Coming soon',
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 3,
    image: IMG13,
    title: 'Title of my project here',
    tech1: 'Coming soon',
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 4,
    image: IMG13,
    title: 'Title of my project here',
    tech1: 'Coming soon', 
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

]


// Array method 

const data3 = [
  
  {
    id: 1,
    image: IMG14,
    title: 'Title of my project here',
    tech1: 'Coming soon',
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 2,
    image: IMG14,
    title: 'Title of my project here',
    tech1: 'Coming soon',
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 3,
    image: IMG14,
    title: 'Title of my project here',
    tech1: 'Coming soon',
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

  {
    id: 4,
    image: IMG14,
    title: 'Title of my project here',
    tech1: 'Coming soon', 
    tech2: '',
    tech3: '',
    tech4: '',
    github: 'https://github.com',
    demo: '#'
  },

]




const Portfolio = () => {

  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
      setToggleState(index)
  }

  return (
    <div id='portfolio' className='bg-navColor justify-between p-5 md:p-14'>
      <h2 className='text-gray-200 text-center pt-10 md:pt-10'>Have a look at </h2>
      <h1 className='text-txColor text-center text-3xl md:text-4xl font-bold'>My Portfolio</h1>  

      <div className='p-2 bg-bgColor rounded-2xl mt-10 flex justify-between text-center'>
        <button className={toggleState === 1 ? 'active-tab tabs md:px-10' : 'tabs'} onClick={() => toggleTab(1)}>
            Tab-1
        </button>

        <button className={toggleState === 2 ? 'active-tab tabs md:px-10' : 'tabs'} onClick={() => toggleTab(2)}>
            Tab-2
        </button>

        <button className={toggleState === 3 ? 'active-tab tabs md:px-10' : 'tabs'} onClick={() => toggleTab(3)}>
            Tab-3
        </button>
      </div>  


            <div className="container content-tabs my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                  data1.map(({id, image, title, tech1, tech2, tech3, tech4, github, demo}) => {
                    return (
                      <div key={id} className= {toggleState === 1 ? "bg-bgColor rounded-2xl border-solid border-2 hidden active-content" : "bg-bgColor rounded-2xl border-solid border-2 hidden"}>
                          <div className=" overflow-hidden rounded-2xl">
                            <img src={image} alt={title} />
                          </div>
                            <a href='#tech' className='px-3 mt-2 flex gap-3 font-semibold text-gray-300 text-sm'>
                               <span className='bg-navColor'>{tech1}</span>
                               <span className='bg-navColor'>{tech2}</span>
                               <span className='bg-navColor'>{tech3}</span>
                               <span className='bg-navColor'>{tech4}</span>
                            </a>
                            <h3 className='p-5 text-txColor font-bold'>{title}</h3>
                          <div className="grid md:grid-cols-2 gap-6 mb-5 p-5">
                            <a href={github} className='bg-transparent hover:bg-imgColor text-txColor inline-flex gap-2 items-center font-bold hover:text-tx1Color hover:transition-all hover:-translate-y-1 hover:scale-110 py-2 px-3 border-solid border-[1px] border-txColor hover:border-transparent rounded' target='_blank' rel='noreferrer'><BsGithub/><span>Github</span></a>
                            <a href={demo} className='bg-imgColor hover:bg-transparent hover:text-txColor hover:border-solid hover:border-[1px] hover:border-txColor hover:transition-all hover:-translate-y-1 hover:scale-110 text-gray-800 font-bold py-2 px-3 rounded inline-flex gap-2 items-center drop-shadow-xl' target='_blank' rel='noreferrer'><TbWorldDownload/><span>Live Demo</span></a>
                          </div>
                  
                    </div>
                    )
                  })
                }

                      {
                        data2.map(({id, image, title, tech1, tech2, tech3, tech4, github, demo}) => {
                          return (
                            <div key={id} className= {toggleState === 2 ? "bg-bgColor rounded-2xl border-solid border-2 hidden active-content" : "bg-bgColor rounded-2xl border-solid border-2 hidden"}>
                                <div className=" overflow-hidden rounded-2xl">
                                  <img src={image} alt={title} />
                                </div>
                                  <a href='#tech' className='px-3 mt-2 flex gap-3 font-semibold text-gray-300 text-sm'>
                                    <span className='bg-navColor'>{tech1}</span>
                                    <span className='bg-navColor'>{tech2}</span>
                                    <span className='bg-navColor'>{tech3}</span>
                                    <span className='bg-navColor'>{tech4}</span>
                                  </a>
                                  <h3 className='p-5 text-txColor font-bold'>{title}</h3>
                                <div className="grid md:grid-cols-2 gap-6 mb-5 p-5">
                              <a href={github} className='bg-transparent hover:bg-imgColor text-txColor inline-flex gap-2 items-center font-bold hover:text-tx1Color hover:transition-all hover:-translate-y-1 hover:scale-110 py-2 px-3 border-solid border-2 border-txColor hover:border-transparent rounded' target='_blank' rel='noreferrer'><BsGithub/><span>Github</span></a>
                                  <a href={demo} className='bg-imgColor hover:bg-transparent hover:text-txColor hover:border-solid hover:border-2 hover:border-txColor hover:transition-all hover:-translate-y-1 hover:scale-110 text-gray-800 font-bold py-2 px-3 rounded inline-flex gap-2 items-center drop-shadow-xl' target='_blank' rel='noreferrer'><TbWorldDownload/><span>Live Demo</span></a>
                                </div>
                        
                          </div>
                          )
                        })
                      }

                            {
                              data3.map(({id, image, title, tech1, tech2, tech3, tech4, github, demo}) => {
                                return (
                                  <div key={id} className= {toggleState === 3 ? "bg-bgColor rounded-2xl border-solid border-2 hidden active-content" : "bg-bgColor rounded-2xl border-solid border-2 hidden"}>
                                      <div className=" overflow-hidden rounded-2xl">
                                        <img src={image} alt={title} />
                                      </div>
                                        <a href='#tech' className='px-3 mt-2 flex gap-3 font-semibold text-gray-300 text-sm'>
                                          <span className='bg-navColor'>{tech1}</span>
                                          <span className='bg-navColor'>{tech2}</span>
                                          <span className='bg-navColor'>{tech3}</span>
                                          <span className='bg-navColor'>{tech4}</span>
                                        </a>
                                        <h3 className='p-5 text-txColor font-bold'>{title}</h3>
                                      <div className="grid md:grid-cols-2 gap-6 mb-5 p-5">
                                    <a href={github} className='bg-transparent hover:bg-imgColor text-txColor inline-flex gap-2 items-center font-bold hover:text-tx1Color hover:transition-all hover:-translate-y-1 hover:scale-110 py-2 px-3 border-solid border-2 border-txColor hover:border-transparent rounded' target='_blank' rel='noreferrer'><BsGithub/><span>Github</span></a>
                                        <a href={demo} className='bg-imgColor hover:bg-transparent hover:text-txColor hover:border-solid hover:border-2 hover:border-txColor hover:transition-all hover:-translate-y-1 hover:scale-110 text-gray-800 font-bold py-2 px-3 rounded inline-flex gap-2 items-center drop-shadow-xl' target='_blank' rel='noreferrer'><TbWorldDownload/><span>Live Demo</span></a>
                                      </div>
                              
                                </div>
                                )
                              })
                            }
                        </div>      



    </div>
  )
}

export default Portfolio