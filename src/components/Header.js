// import React from 'react'
// import { SocialIcon } from 'react-social-icons';
// import { motion } from 'framer-motion';
// import { BrowserRouter, Link } from 'react-router-dom';

// function Header() {

//     return (
//         <div className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
//             <motion.div
//             initial={{
//                 x:-500,
//                 opacity:0,
//                 scale:0.5
//             }} 
//             animate={{
//                 x:0,
//                 opacity:1,
//                 scale:1
//             }}
//             transition={{
//                 duration: 1,
//             }}
//             className='flex flex-row items-center'>
//                 {/* {social icon} */}
//                 <SocialIcon url='https://www.youtube.com/channel/UC6lbcWWAoKAEGcjPV17HGCg' fgColor='grey' bgColor='transparent'/>
//                 <SocialIcon url='https://www.facebook.com/arpit.sarkar.988/' fgColor='grey' bgColor='transparent' />

//                 <SocialIcon url='https://www.instagram.com/arpit.sarkar_/?igshid=YmMyMTA2M2Y%3D' fgColor='grey' bgColor='transparent' />

//             </motion.div>

           
           
//             <motion.div
//             initial={{
//                 x:500,
//                 opacity:0,
//                 scale:0.5
//             }}
//             animate={{
//                 x:0,
//                 opacity:1,
//                 scale:1
//             }}
//             transition={{
//                 duration: 1,
//             }}
//             className='flex flex-row items-center text-gray-300 cursor-pointer'>
//                 <SocialIcon url='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' fgColor='grey' bgColor='transparent' network='email' />
//                 <p className='uppercase hidden md:inline-flex text-sm text-gray-300'>Get IN Touch</p>
//             </motion.div>
           

//             </div>
       
//     )
// }

// export default Header
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
// import { BrowserRouter, Link } from 'react-router-dom';

function Header() {

    return (
        <div className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
            <motion.div
            initial={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1,
            }}
            className='flex flex-row items-center'>
                {/* {social icon} */}
                <SocialIcon url='https://www.youtube.com/channel/UC6lbcWWAoKAEGcjPV17HGCg' fgColor='grey' bgColor='transparent'/>
                <SocialIcon url='https://www.facebook.com/arpit.sarkar.988/' fgColor='grey' bgColor='transparent' />

                <SocialIcon url='https://www.instagram.com/arpit.sarkar_/?igshid=YmMyMTA2M2Y%3D' fgColor='grey' bgColor='transparent' />

            </motion.div>

           
           
            <motion.div
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon url='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' fgColor='grey' bgColor='transparent' network='email' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-300'>Get IN Touch</p>
            </motion.div>
           

            </div>
       
    )
}

export default Header