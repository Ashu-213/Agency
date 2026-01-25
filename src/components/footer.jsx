import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'


const Footer = ({ theme }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}

            className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 '>
            {/* footer top */}
            <div className='sapce-y-5 tt-sm text-gray-700 dark:text-gray-400'>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}

                    className='flex justify-between w-full max-lg:flex-col gap-10 pb-10'>
                    {/* Left Side */}
                    <div className='flex flex-col gap-4'>
                        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className='w-32 sm:w-44' />
                        <p className='max-w-md'>From strategy to execution, we deliver excellence.</p>
                        <ul className='flex gap-8'>
                            <li>
                                <a href="#hero" className="hover:text-primary">Home</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-primary">Services</a>
                            </li>
                            <li>
                                <a href="#our-work" className="hover:text-primary">Our work</a>
                            </li>
                            <li>
                                <a href="#contact-us" className="hover:text-primary">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - Add your content here */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-gray-600 dark:text-gray-400'>
                        <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                        <p className='text-sm mt-2 mb-6'>Stay updated with our latest news and offers.</p>
                        <div className='flex gap-2 text-sm'>
                            <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm rounded outline-1 bg-transparent border-gray-300 dark:border-gray-500 ' />
                            <button className='px-6 bg-primary text-white rounded-full hover:scale-103 transition-all cursor-pointer'>Subscribe</button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <hr className='my-6 border-gray-300 dark:border-gray-600' />

            {/* footer bottom */}
            <motion.div 
                initial={{ opacity:0}}
                whileInView={{ opacity:1}}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            className='pb-6 text-sm text-gray-500 flex justify-between sm:justify-between gap-4 flex-wrap'>
                <p>&copy; 2024 Agency.ai. All rights reserved.</p>
                <div className='flex justify-between items-center gap-4'>
                    <img src={assets.facebook_icon} className='sm:hover:scale-105 transition-all cursor-pointer' />
                    <img src={assets.instagram_icon} className='sm:hover:scale-105 transition-all cursor-pointer' />
                    <img src={assets.twitter_icon} className='sm:hover:scale-105 transition-all cursor-pointer' />
                    <img src={assets.linkedin_icon} className='sm:hover:scale-105 transition-all cursor-pointer' />
                </div>
            </motion.div>


        </motion.div>
    )
}

export default Footer