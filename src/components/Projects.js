import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let projects_data = "https://api.npoint.io/ddf650d3e1efa0cbec21"
            const response = await fetch(projects_data);
            const json = await response.json();
            setProjects(json);
        }
        fetchData()
    }, [])


    return (
        <motion.div
            className="h-screen pt-16 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-y-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className="absolute text-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                <span>Projects</span>
                <h6 className='text-xs'>slide Right for more Content</h6>
            </h3>


            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
                {projects && projects.map((each, index) => (
                    <div
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                        key={index}
                    >
                        <motion.img
                            initial={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            src="https://i.imgur.com/WSz74KJ.png"
                            alt="Image"
                            className='w-auto md:h-52 h-32 object-cover'
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#f7ab0a]/50">
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "}
                                {each.name}
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                {each.description}
                            </p>
                            <div className='flex items-center'>
                                <div className='flex-grow'>
                                    <h1>what i use:</h1>

                                    <ul className='grid md:grid-cols-6  justify-evenly items-center space-y-2 md:gap-4 text-center' >
                                        {each.tags &&
                                            each.tags.map((tags, tagIndex) => (
                                                <li className='text-gray-300 border border-gray-500 rounded-xl px-2 hover:bg-gray-500 hover:text-white' key={tagIndex}>{tags}</li>
                                            ))}
                                    </ul>
                                </div>
                                <div>
                                    <SocialIcon url='https://github.com/arpitsarkar2003/airbnb-clone' fgColor='grey' bgColor='transparent'/>
                                    <SocialIcon url='https://airbnbarpit.netlify.app' fgColor='grey' bgColor='transparent' />
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects