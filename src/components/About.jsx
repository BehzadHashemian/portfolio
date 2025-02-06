import React from 'react'
import about from '../assets/react.jpg'
const About = () => {
    const message = "This portfolio website is a fully responsive front-end project built using React, Vite, and Tailwind CSS. It showcases my skills, projects, and experience in a visually appealing and interactive way. With a modern and minimalistic design, smooth animations, and fast performance, the website provides an engaging user experience."

    return (
        <div className='flex flex-col bg-black text-white text-center font-bold text-6xl py-10'>
            About This Website
            <div className='flex md:flex-row flex-col bg-black text-white px-4 md:px-10 my-10 md:my-15 items-center'>
                <div className='flex-1'>
                    <img className='rounded-4xl md:w-[60%] m-auto' src={about} alt="" />
                </div>
                <div className='flex-1 md:px-10 m-auto md:text-2xl my-6 px-4 text-lg font-medium text-justify'>
                    {message}
                </div>
            </div>
        </div>
    )
}

export default About