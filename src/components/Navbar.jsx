import React from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from 'motion/react'

const Navbar = ({ theme, setTheme }) => {

    const [sidebaropen, setSidebaropen] = React.useState(false);

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium b-white bg-white/50 dark:bg-gray-900/70 cursor-pointer'>
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" />

            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebaropen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

                <img src={assets.close_icon} className='w-5 absolute right-4 top-4 sm:hidden'
                    onClick={() => setSidebaropen(false)} />

                <a onClick={() => { setSidebaropen(false) }} href="#" className='sm:hover:text-primary'>Home</a>
                <a onClick={() => { setSidebaropen(false) }} href="#services" className='sm:hover:text-primary'>Services</a>
                <a onClick={() => { setSidebaropen(false) }} href="#our-work" className='sm:hover:text-primary'>Our work</a>
                <a onClick={() => { setSidebaropen(false) }} href="#contact-us" className='sm:hover:text-primary'>Contact us</a>
            </div>

            <div className='flex items-center gap-6 sm:gap-4'>

                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" className='w-8 sm:hidden'
                    onClick={() => setSidebaropen(true)} />

                <a href="#contact-us" className='text-sm max-sm:hidden px-6 py-2 border bg-primary text-white rounded-full flex items-center gap-2 hover:scale-103 transition-all'>
                    Connect <img src={assets.arrow_icon} width={14} alt="" />
                </a>
            </div>
        </motion.div>

    )
}

export default Navbar