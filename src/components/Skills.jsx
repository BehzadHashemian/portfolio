import React from 'react'
import SkillCard from './SkillCard'
import pic from '../assets/profile.jpeg'

const Skills = () => {
    const frontend = [
        { name: "React", level: 100 },
        { name: "JavaScript", level: 100 },
        { name: "HTML", level: 100 },
        { name: "CSS", level: 90 },
        { name: "Angular", level: 80 }
    ]

    return (
        <div className='bg-black text-white flex justify-center px-10 py-10'>
            <SkillCard skills={frontend} name="Front-End Development" img={pic}/>
        </div>
    )
}

export default Skills
