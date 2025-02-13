import React, { useState, useEffect } from "react";
import SkillCard from './SkillCard'
import pic from '../assets/profile.jpeg'

const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/skills/")
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.error("Error fetching skills:", error));
    }, []);


    console.log(skills)


    
    // Group skills by category
    const categories = {};
    skills.forEach(skill => {
        if (!categories[skill.category]) {
            categories[skill.category] = [];
        }
        categories[skill.category].push(skill);
    });


    console.log(categories)

    const frontend = [
        { name: "React", level: 100 },
        { name: "JavaScript", level: 100 },
        { name: "HTML", level: 100 },
        { name: "CSS", level: 90 },
        { name: "Angular", level: 80 }
    ]
    const databases = [
        { name: "SQL Server", level: 100 },
        { name: "MySQL", level: 100 },
        { name: "PostgreSQL", level: 100 },
        { name: "SSIS", level: 90 },
        { name: "SSAS", level: 80 },
        { name: "ETL", level: 90 }
    ];

    const cloudAndContainerTech = [
        { name: "Google Cloud", level: 90 },
        { name: "AWS", level: 85 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 }
    ];

    const mobileAndUIUX = [
        { name: "Kotlin", level: 90 },
        { name: "Java", level: 70 },
        { name: "React Native", level: 80 },
        { name: "UI/UX", level: 80 },
        { name: "Material UI", level: 85 },
        { name: "Jetpack", level: 100 }
    ];
    const pythonAndML = [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "Numpy", level: 85 }
    ];



    return (
        <div id="skills" className="bg-black text-white flex-col">
            <div className="text-6xl text-center font-bold">Skills</div>
            <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
                {Object.keys(categories).map((category, index) => (
                    <SkillCard key={index} skills={categories[category]} name={category} img={pic} />
                ))}
            </div>
        </div>
    );


}

export default Skills
