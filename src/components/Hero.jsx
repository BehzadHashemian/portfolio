import React from 'react'
import profile from '../assets/profile.jpeg'
const Hero = () => {
    return (
        <div id="home" className='bg-black flex flex-col items-center py-10 md:py-15 text-white'>
            <div className='absolute blue__gradient h-[40%] w-[30%] z-[1] right-12 top-20 opacity-85'></div>
            <div className='absolute blue__gradient h-[40%] w-[80%] sm:w-[60%] md:w-[40%] z-[1] left-12 top-80 opacity-85'></div>
            <div>
                <img className='rounded-full h-68 my-8 drop-shadow-[0_0_20px_rgba(0,180,127,0.4)]' src={profile} alt="" />
            </div>
            <div className='lg:flex text-2xl md:text-3xl padding'>
                <div className=' flex'>
                    <div className='px-2'>I'm</div>
                    <div className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Sayyedbehzad Hashemian
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='px-2 lg:block hidden'> , </div>
                    <div className='text-center'>a full stack developer</div>
                </div>
            </div>
            <div className='w-3/4 text-center mt-4'>
                Passionate full-stack developer with expertise in building dynamic and responsive web applications. Skilled in both front-end and back-end technologies, I deliver seamless user experiences and robust solutions, utilizing a strong foundation in JavaScript, HTML, CSS, and server-side frameworks.
            </div>
            <button className='text-black lg:text-md text-sm font-bold px-6 py-2 my-4 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500 shadow-lg hover:scale-105 
                     transition-transform duration-300  drop-shadow-[0_0_15px_rgba(0,255,127,0.7)]'>Download Resume</button>
        </div>
    )
}

export default Hero