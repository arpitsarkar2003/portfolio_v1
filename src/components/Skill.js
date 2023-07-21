import React from 'react'
import { motion } from 'framer-motion';
import Skills from './Skills';


function Skill() {
  return (
    <motion.div
    initial={{opacity:0}}
    transition={{duration:0.3}}
    whileInView={{opacity:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs'>Hover over a skill for currency profienciency</h3>

        <div className='relative grid md:grid-cols-3 grid-cols-2 gap-4'>
            <Skills 
            percent={"100"} image='https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360'
            />
            <Skills 
            percent={"95"} image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
            />
            <Skills 
            percent={"65"} image='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            />
            <Skills 
            percent={"85"} image='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'
            />
            <Skills 
            percent={"100"} image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
            />
            <Skills 
            percent={"50"} image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
            />
            <Skills 
            percent={"60"} image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png'
            />
            <Skills 
            percent={"50"} image='https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg'
            />
        </div>
    </motion.div>
  )
}

export default Skill