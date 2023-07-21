import React from 'react'
import About from './About';
import Header from './Header';
import Hero from './Hero';
import WorkExp from './WorkExp';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
			<Header />
			<section className="snap-start" id="hero">
				<Hero />
			</section>
			<section className="snap-center" id="about">
				<About />
			</section>
			{/* <section className="snap-center" id="experience">
				<WorkExp />
			</section> */}
			
			<section className="snap-start" id="projects">
				<Projects />
			</section>
            <section className="snap-start" id="skills">
				<Skill />
			</section>
			<section className="snap-start" id="contact">
				<Contact />
			</section>

			{/* <Link to="/">
				<footer className="sticky bottom-5 right-0 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img
							className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/353058618_1677208709416913_7855208849652078337_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=AQgVvO59a6oAX-qT8tj&_nc_ht=scontent.fccu31-1.fna&oh=00_AfBACVWek3bfNnN0Yt1ppC7pgu9iOC1brlVnYT7NG-8EbA&oe=64BEE0FF"
							alt="Image"
						/>
					</div>
				</footer>
			</Link> */}
		</div>
  )
}

export default Home