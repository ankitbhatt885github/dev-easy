import React, { useState } from 'react'
import { Menu, X } from "lucide-react"
import { navItems } from "../constants"

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toggleMenu() {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <nav className="sticky top-0 z-50 border-b py-3 backdrop-blur-lg border-blue-300">
            <div className="container px-4 mx-auto">

                <div className="flex justify-between items-center">

                    {/* logo  */}
                    <div className='flex items-center flex-shrink-0'>
                        <span className="text-xl tracking-tight">Dev<span className='text-blue-300 font-medium'>Easy</span></span>
                    </div>

                    <ul className='hidden lg:flex ml-14 space-x-12 '>

                        {navItems.map((item, index) => (
                            <li className='hover:text-blue-300' key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}

                    </ul>
                    <div className="hidden lg:flex justify-center items-center gap-6">
                        <a href="" className='rounded-md border px-3 py-2 hover:bg-blue-600'>Sign In</a>

                        <a href="" className='bg-gradient-to-r from-blue-400 to-blue-800 px-3 py-2 rounded-md'>Create an Account</a>


                    </div>

                    {/* hamburger icon  */}
                    <div className="lg:hidden md:flex flex-col ">
                        <button onClick={toggleMenu} className=''>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className='fixed right-0 z-20  p-12 w-full lg:hidden flex flex-col justify-center items-center bg-neutral-900'>
                        <ul>

                            {navItems.map((item, index) => (
                                <li className='py-4' key={index}>
                                    <a href="">{item.label}</a>
                                </li>
                            ))}


                        </ul> 

                        <div className="mt-2 flex flex-col gap-2">
                        <a href="" className='rounded-md border px-2  py-2 text-center hover:bg-blue-500'>Sign In</a>
                        <a href="" className='rounded-md px-2 py-2 text-center bg-gradient-to-r from-blue-400 to-blue-800  '>Create Account</a>
                        </div>
                        
                        
                        
                        </div>
                )}



            </div>
        </nav>
    )
}

export default Navbar