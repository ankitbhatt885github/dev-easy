import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/code-img.jpg"
import { checklistItems } from '../constants'


const ProcessFlow = () => {
  return (
    <div className="lg:mt-20 sm:mt-10">
        <h2 className="text-3xl mb-5 lg:6-xl text-center mt-6 ">Supercharge your <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">development process.</span></h2>

        <div className="flex flex-wrap justify-center">
            {/* half width of img in large screens  */}
            <div className="p-2 pt-20 w-full lg:w-1/2">
                <img className='rounded-lg ' src={codeImg} alt="Code" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item,index) => (
                <div key={index} className='flex mb-12'> 
                <div className='text-green-400 mx-6 h-10 w-10 rounded-full items-center justify-start'>
                    <CheckCircle2 />
                    
                    </div>
                    
                    <div>
                        <h5 className='mt-1 mb-2 text-xl'>{item.title} </h5>
                        <p className='text-gray-500 text-md'>{item.description}</p>
                    </div>
                    
                    </div>
            ))}
            
            </div>
        </div>
    </div>
  )
}

export default ProcessFlow