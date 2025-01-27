import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'
import { div } from 'framer-motion/client'

const Price = () => {
    return (
        <div className="mt-20">
            <h2 className='text-3xl lg:text-5xl  text-center my-8'>Pricing</h2>
            <div className="flex flex-wrap">

                {pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className="p-6 border border-gray-300 rounded-xl bg-gradient-to-b from-gray-800 to-gray-600 hover:border-blue-400 transform hover:scale-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600">
                            <p className='text-4xl mb-8'>{option.title}

                                {option.title === "Plus" && <span className=' text-blue-400 text-xl'>(Most Popular)</span>}
                            </p>

                            <p className='mb-8 '>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-gray-400'>/Month</span>
                            </p>

                            <ul>

                                {option.features.map((feature,index) => (
                                    <li key={index} className='mt-8 items-center flex gap-1'>
                                        <CheckCircle2 className='text-blue-500' />
                                        <span>{feature}</span>
                                    </li>
                                ))}



                            </ul>

                            <a href="#" className='inline-flex border p-2 rounded-lg text-center justify-center w-full items-center text-xl mt-20 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-400/50 transition duration-200 font-medium'>
  Join Now
</a>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Price