import { motion } from 'framer-motion'
import React from 'react';


function About() {

    return (
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
        className='h-screen  flex-col relative flex text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 0.7,
                    }}
                    whileHover={{
                        opacity: 1,
                    }}
                    // viewport={{once:true}}
                    transition={{
                        duration: 0.5,
                    }}

                    className='relative rounded-full sm:rounded-3xl mx-auto object-cover -mb-20 h-52 w-52 sm:h-96 sm:w-96'
                    src="./img.jpg"
                />

                <div className='space-y-7 px-0 md:px-10'>
                    <h4 className='text-2xl font-semibold'>Here is a <span className='underline decoration-slate-500/50 font-semibold text-[#F7AB0A]' >Little</span> background</h4>
                    <p className='text-sm'> A Full-Stack developer is a professional responsible for working on both front-end and back-end development processes. They design, develop, and maintain fully-fledged and functioning platforms with databases or servers. These servers do not need other third-party applications to build an entire system from scratch. Hello I am <span className='font-semibold text-[#F7AB0A]'>Arpit Sarkar</span>, I am From Jalpaiguri(West Bengal),India. I completed my BCA course from Siliguri Ititute of Technology. </p>
                </div>
        </motion.div>
    )
}

export default About