import React from 'react'

const SkillCard = ({ skills , name , img}) => {
    return (
        <div className='mx-2 px-4 py-6 border-2 rounded-4xl border-blue-300 shadow-[0_0_15px_3px_rgba(0,191,255,0.6)]'>
            <div className='flex px-2 justify-center'>
                <img className='w-[10%] rounded-full mx-4 mb-4' src={img} alt="" />
                <div className='text-md '>{formatCategoryName(name)}</div>
            </div>
            
            {skills.map((skill, index) => (
                <div key={index} className='flex my-2 justify-between items-center'>
                    <div className='text-sm'>{skill.name}</div>
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
const formatCategoryName = (category) => {
    const categoryMap = {
        frontend: "Front-End Development",
        databases: "Database Management",
        cloud: "Cloud & Container Technologies",
        mobile: "Mobile Development",
        python_ml: "Machine Learning",
    };
    return categoryMap[category] || category;
};
export default SkillCard
