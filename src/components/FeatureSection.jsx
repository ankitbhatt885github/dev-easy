import React from 'react'
import {features} from "../constants"

const FeatureSection = () => {
    return (
        
        <div className='relative border-b mt-20 min-h-[800px]'>
            
            <div className="text-center"><span className='bg-neutral-900 text-blue-600 px-2 py-2 text-lg font-medium '>FEATURES</span>

                <h2 className='text-3xl lg:text-5xl mt-10 '>Simplify <span className='bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text'>Dev Process</span></h2>
            </div>

            <div className="flex flex-wrap mt-10 lg:mt-20">
                {features.map((feature,index) => (
                    <div key={index} className='w-full sm:1/2 lg:w-1/2'>
                        <div className='flex'>
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-500 items-center justify-center rounded-full">
                                {feature.icon}
                                
                                </div>
                                <div>
                                    <h5>{feature.text}</h5>
                                    <p className='text-md p-2 mb-20 text-gray-500'>{feature.description}</p>
                                </div>
                                
                                
                                </div> </div>

                ))}
            </div>
        </div>
    )
}

export default FeatureSection