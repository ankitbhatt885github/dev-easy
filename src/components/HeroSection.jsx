import React from 'react'
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
   <div className="flex  flex-col items-center lg:mt-6">
     <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 150 }}
  >
    <h1 className="text-4xl lg:text-6xl text-center">
      Dev<span className="text-blue-300">Easy </span>simplify your{" "}
      <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
        dev journey
      </span>
    </h1>
  </motion.div>


  <motion.div
   initial={{ opacity: 0, y: 50 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 1 }}
  >
    <p className='text-lg mt-20 text-center text-gray-300 max-w-4xl'>DevEasy makes your development process simple and fast. With easy-to-use tools, smooth integrations, and better collaboration, you can focus more on building great projects and less on managing tasks. Whether you're a beginner or a pro, DevEasy helps you streamline every part of your workflow, so you can work smarter and get results quicker.</p>

    </motion.div>
    <div className="flex items-center justify-center my-10 lg:gap-8">
    <a href="" className='bg-gradient-to-r from-blue-400 to-blue-800 px-4  py-3 rounded-md'>Try It Free</a>
    <a href="" className='border border-blue-400 text-center px-4 py-3 rounded-md mx-3 hover:bg-blue-600'>Read Docs</a>

    
    </div>
   </div>
  )
}

export default HeroSection