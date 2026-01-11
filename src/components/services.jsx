
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'


const Services = () => {

    const serviceData = [
        { title: 'Advertising', 
          description: 'Creating compelling ad campaigns that drive engagement and conversions.',
          icon: assets.ads_icon
        },
        { title: 'Content Creation', 
          description: 'Crafting engaging content that captivates your audience and builds brand loyalty.',
          icon: assets.ads_icon
        },
        { title: 'E-Commerce Solutions', 
          description: 'end-to-end E-Commerce platforms that enhance user experience and boost sales.',
          icon: assets.ads_icon
        },
        { title: 'Conversion Optimization', 
          description: 'Improving website performance to increase user actions and maximize ROI.',
          icon: assets.ads_icon
        },
    ]

    return (
        <div id='services' className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 py-20 w-full'>
            <img src={assets.bgImage2} alt="" className='dark:hidden absolute -top-110 -left-70 -z-10'/>
            <Title title="how can we help you?" desc="Discover our range of services designed to elevate your brand and drive success." />

            <div className='flex flex-col md:grid grid-cols-2'>
               {serviceData.map((service, index)=>{
                return <ServiceCard key={index} Service={service} index={index}/>
               })}
            </div>
        </div>
    )
}

export default Services