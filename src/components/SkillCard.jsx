import React from 'react'

const SkillCard = ({ skills , name , img}) => {
    return (
        <div className='px-4 py-6 md:w-[45%] lg:w-[30%] border-2 rounded-2xl border-blue-300 shadow-lg'>
            <div className='flex px-2 justify-center'>
                <img className='w-[10%] rounded-full mx-4 mb-4' src={img} alt="" />
                <div className='text-md '>{name}</div>
            </div>
            
            {skills.map((skill, index) => (
                <div key={index} className='flex my-2 justify-between items-center'>
                    <div>{skill.name}</div>
                    <div className='bg-gray-800 rounded-full h-2.5 w-[70%]'>
                        <div
                            className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full'
                            style={{ width: `${skill.level}%` }} 
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SkillCard
