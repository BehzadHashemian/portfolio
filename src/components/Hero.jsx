import React from 'react'
import profile from '../assets/profile.jpeg'
import resume from '../assets/behzad hashemian.pdf'
const Hero = () => {
    const handleClick = () => {
    };

    return (
        <div id="home" className='bg-black flex flex-col items-center py-10 md:py-15 text-white'>
            <div className='absolute blue__gradient h-[40%] w-[30%] z-[1] right-12 top-20 opacity-85'></div>
            <div className='absolute blue__gradient h-[40%] w-[80%] sm:w-[60%] md:w-[40%] z-[1] left-12 top-80 opacity-85'></div>
            <div>
                <img
                    className="rounded-full h-68 my-8 drop-shadow-[0_0_20px_rgba(0,180,127,0.4)] "
                    src={profile}
                    alt="Profile"
                />
            </div>
            <div className='lg:flex text-2xl md:text-3xl padding'>
                <div className=' flex'>
                    <div className='px-2'>I'm</div>
                    <div className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Behzad Hashemian
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='px-2 lg:block hidden'> , </div>
                    <div className='text-center'>a Software Engineer</div>
                </div>
            </div>
            <div className='w-3/4 text-center mt-4'>
            Experienced full-stack developer and database administrator with a strong background in building and managing web applications. Skilled in front-end development using HTML, CSS, and JavaScript and ReactJS as well as backend development with Django/Node.js. Proficient in designing and optimizing SQL databases to ensure efficiency, security, and scalability. Comfortable working on API development, authentication systems, and cloud deployment. Focused on delivering clean, maintainable code and improving system performance.            </div>
            <a href={resume} download={'behzadhashemian.pdf'} className='text-black lg:text-md text-sm font-bold px-6 py-2 my-4 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500 shadow-lg hover:scale-105 
                     transition-transform duration-300  drop-shadow-[0_0_15px_rgba(0,255,127,0.7)]'>Download Resume</a>
        </div>
    )
}

export default Hero