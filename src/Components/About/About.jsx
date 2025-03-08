import React from 'react'
import {assets} from '../../assets/assets'

const About = () => {
  return (
    <div className='bg-slate-100 dark:bg-dark  dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center '>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img src={assets.car2} alt="" className='sm:scale-105 sm:translate-x-11 max-h-[300px] drop-shadow-[]'/>
          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-serif'>About Us</h1>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptatum error culpa perferendis distinctio?</p>

              <p data-aos = "fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, fugit?</p>

              <button data-aos="fade-up" className='button-outline'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About