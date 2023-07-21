import React from 'react';
import { motion } from "framer-motion";
import ExpCard from './ExpCard';

function WorkExp() {
  return (
    <motion.div
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
		>
			<h3 className="absolute top-20  uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>

			<div className="w-full my-20 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
				<ExpCard />
				<ExpCard />
				<ExpCard />
				<ExpCard />
			</div>
		</motion.div>
  )
}

export default WorkExp