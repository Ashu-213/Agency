import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Team = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
        <Title title='Our Team' desc='Meet the talented individuals behind our success'/>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {teamData.map((team, index)=>(
                <div key={index} className='flex flex-col items-center gap-3 p-4 rounded-xl hover:scale-103 transition-all duration-300 bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900/30'>
                    <img src={team.image}className='w-12 h-12 rounded-full' />
                    <div className='flex-1 text-center'>
                        <h3 className='font-bold text-sm text-gray-800 dark:text-white'>{team.name}</h3>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>{team.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team