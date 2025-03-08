import React from 'react'
import { skillData } from '../../assets/assets'

const Services = () => {
  return (
    <div className='py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className="container">
        <div className='pb-12'>
          <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Why Choose Us</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            skillData.map((data) => (
              <div className='card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg' key={data.name} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                <div className='grid place-items-center'>
                  {data.icons}
                </div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <a href={data.link}>Learn More</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services