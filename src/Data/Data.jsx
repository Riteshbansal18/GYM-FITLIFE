import {CiDumbbell} from "react-icons/ci"
import {BsHeartPulse} from "react-icons/bs"
import {BiTimeFive} from "react-icons/bi"
import {BiStopwatch} from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"

import img1 from "../assets/nikhil1.png"
import img11 from "../assets/krish.png"
// import img2 from "../assets/img-9.jpg"
import img3 from "../assets/tanish.png"
import img4 from "../assets/img-11.jpg"
import img5 from "../assets/rohit.png"

import img6 from "../assets/ritesh.png"
import img7 from "../assets/img-15.jpg"
import img8 from "../assets/img-9.jpg"

import img9 from "../assets/img-20.jpg"
import img10 from "../assets/img-21.jpg"
// import BMICalculator from "../Components/BMI"



export const navLinks = [
    {label:"Home",href:"#home"},
    {label:"About",href:"#about"},
    {label:"Services",href:"#services"},
    {label:"BMICalculator",href:"#bmi"},
    {label:"Gallery",href:"#gallery"},
    {label:"Blog",href:"#blog"},
    {label:"Contact",href:"#contact"}
]

export const services = [
    {
        icon:<CiDumbbell />,
        label:"QUALITY EQUIPMENT",
        desc:"Engineered for excellence. High-performance equipment designed to enhance your fitness and well-being.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BsHeartPulse />,
        label:"HEALTH CARING",
        desc:"Your health, our priority. Offering personalized care to support your well-being every step of the way.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiTimeFive />,
        label:"GYM STRATEGIES",
        desc:"We have specific plans and strategies to build your body in effective manner and shape your future.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiStopwatch />,
        label:"EFFECTIVE TIME USE",
        desc:"We have specific trained trainers who make your time used correctly and efficently. ",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiStopwatch />,
        label:"ZUMBA CLASSES",
        desc:"Join our Zumba classes led by expertly trained instructors who ensure every session is to your fitness goals.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<CiDumbbell />,
        label:"DIET PLANS",
        desc:"Achieve your fitness goals with personalized diet plans crafted by our nutrition experts.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
]


export const client = [
    {
        id:1,
        desc:'"Results happens over time , not overnight. Work hard , stay consistent and be patient "',
        img:img1,
        clientName:"Nikhil dalal"
    },
    {
        id:2,
        desc:"Your body can stand almost anything . Its your mind you have to convince.",
        img:img11,
        clientName:"Krrish Maadan"
    },
    {
        id:3,
        desc:'"Determination fuels my workouts,progress fuels my motivation."',
        img:img3,
        clientName:"Tanish wadhwa"
    },
    {
        id:4,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
        img:img4,
        clientName:"Thomos"
    },
    {
        id:5,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img5,
        clientName:"Dravid"
    }
]

export const teamMembers =[
    {
        img:img6,
        role:"OWNER",
        name:"RITESH BANSAL"
    },
    {
        img:img7,
        role:"Fitness Trainer",
        name:"LAKSHAY"
    },
    {
        img:img5 ,
        role:"Personal Trainer For Girls",
        name:"ROHIT KUMAR YADAV"
    },
    {
        img:img8,
        role:"Personal Trainer For Boys",
        name:"MAYANK"
    },
]

export const blog = [
    {   img:img9,
        date:"19",
        role:"Creative director",
        desc:"Footprints in Time is perfect House in Kurashiki"
    },
    {
        img:img10,
        date:"27",
        role:"Creative director",
        desc:"Footprints in Time is perfect House in Kurashiki"
    }
]

export const footer = [
    {
        title:"COMPANY",
        footerLinks:[  
            {link:"About Us"},
            {link:"Company"},
            {link:"Press & Blog"},
            {link:"Privacy Policy"}
        ]
    },
    {
        title:"OPEN HOUR",
        footerLinks:[
            {link:"Monday 5am-10pm"},
            {link:"Tuesday-Friday 5am-11pm"},
            {link:"Saturday 6am-10pm"},
            {link:"Sunday 11am-6pm"}
        ]
    },
]