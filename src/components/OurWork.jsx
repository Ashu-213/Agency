import React from 'react'
import Title from './Title'
import assets from '../assets/assets'


const OurWork = () => {
    const WorkData = [
        {
        title: 'Mobile App Design',
        desc: 'A user-friendly mobile application designed to enhance user engagement and streamline functionality.',
        image: assets.work_mobile_app
        },    
        {
        title: 'Dashboard Interface',
        desc: 'A modern website for a healthcare provider, focusing on accessibility and patient resources.',
        image: assets.work_dashboard_management
        },    
        {
        title: 'Fitness Tracker',
        desc: 'A comprehensive fitness tracking app that helps users monitor their health and achieve their fitness goals.',
        image: assets.work_fitness_app
        },    
    ]
  return (
    <div id='OurWork' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white '>
        <Title title='Our latest Work' desc='Check out some of our recent projects'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {WorkData.map((work, index)=>(
                <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='rounded-xl w-full' />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 2-5/6'>{work.desc}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default OurWork