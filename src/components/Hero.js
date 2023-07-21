import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import { Link } from "react-router-dom";
// import './Hero.css';
// import img from './img1.jpg'

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Arpit",
      "I'm Full-Stack Developer",
      "<ILoveToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  const myScroll = (target_val) => {
    const section = document.querySelector(target_val);
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (

    <div
      className='h-[70vh] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover' alt='' src="./img1.jpg"/>
      
      <div className='z-20'>
        <div>
        <h2 className='md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-2xl lg:text-4xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        </div>
        

      <div className='pt-5 text-lg'>
        <Link href="#about">
        <button className='herobutton' onClick={() => myScroll("#about")}>About</button>
        </Link>
        {/* <Link href="#Experince">
        <button className='herobutton' onClick={() => myScroll("#work_exp")}>Experince</button>
        </Link> */}
        <Link href="#Skills">
        <button className='herobutton' onClick={() => myScroll("#skill_set")}>Skills</button>
        </Link>
        <Link href="#Projects">
        <button className='herobutton' onClick={() => myScroll("#projects")}>Projects</button>
        </Link>
        <Link href="#Projects">
        <button className='herobutton' onClick={() => myScroll("#contact")}>Conatact</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Hero