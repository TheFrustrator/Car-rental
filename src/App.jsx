import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import CarList from './Components/CarList/CarList'
import Testimonial from './Components/Testimonials/Testimonials'
import AppStoreBanner from './Components/AppStoreBanner/AppStoreBanner'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  // dark feature 
  const [theme , setTheme ] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
);

const element = document.documentElement;
useEffect(() => {
  if (theme==="dark"){
    element.classList.add("dark");
    localStorage.setItem("theme","dark");
  }else{
    element.classList.remove("dark");
    localStorage.setItem("theme","light")
  }
},[theme]);

useEffect(() => {
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
  }); AOS.refresh();
},[]);

  return (
    <div className='bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
