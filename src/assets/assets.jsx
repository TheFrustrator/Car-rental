import car1 from './car-ZEOhyDK7.png';
import car2 from './car1-hZQ2D7_f.png';
import car3 from './car5-yqn6JzI5.png';
import car4 from './car6-F6zfadLp.png';
import pattern from './pattern-yB80x_mq.jpeg';
import play_store from './play_store-25MAnoNl.png';
import app_store from './app_store-aoAyJ2T_.png';
import todler from './117-200x200.jpg'
import lightCar from './light-car.png'
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';
import { FaCameraRetro } from 'react-icons/fa6';

export const assets = {
    car1,
    car2,
    car3,
    car4,
    pattern,
    play_store,
    app_store,
    todler,
    lightCar,
}

export const NavLinks = [
    {
        id: 1,
        name: "HOME",
        link: "/#",
    },
    {
        id: 2,
        name: "CARS",
        link: "/#cars",
    },
    {
        id: 3,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 4,
        name: "BOOKING",
        link: "/#booking",
    },
]

export const skillData = [
    {
        name: "Best Price",
        icons: (
            <FaCameraRetro className ="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link:"#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        aosDelay: "0",
       
    },
    {
        name: "Fast and Safe",
        icons: (
            <GiNotebook className ="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link:"#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        aosDelay: "500",
       
    },
    {
        name: "Experience Drivers",
        icons: (
            <SlNote className ="text-5xl text-primary group-hover:text-black duration-300"/>
        ),
        link:"#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        aosDelay: "1000",
       
    },
]

export const CarListData = [
    {
        name:"BMW",
        price:100,
        img: car2 ,
        aosDelay: "0",
    },
    {
        name:"KIA UX",
        price:140,
        img: car3,
        aosDelay: "500",
    },
    {
        name:"BMW UX",
        price:100,
        img: car4,
        aosDelay: "1000",
    },
]


export const TestimonialData =[

    {   
        id: 1,
        name: "Dilshad",
        img: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay :"0",
    },
    {   
        id: 2,
        name: "Satya",
        img: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay :"500",
    },
    {   
        id: 3,
        name: "Sabir",
        img: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        aosDelay :"1000"
    },
]

export const BannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:"100%",
    width:"100%",
};


export const FooterLinksData = [
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact",
    },
    {
        id: 4,
        title: "Blogs",
        link: "/#blogs",
    },
]