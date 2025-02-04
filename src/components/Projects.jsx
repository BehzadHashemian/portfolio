import React from 'react'
import ProjectCard from './ProjectCard'
import proimg from '../assets/profile.jpeg'
const Projects = () => {

    const projectsData = [
        {
          name: "Rental Movie Data Warehouse",
          img: proimg, // You can replace this with the relevant image for the project.
          desc: `Built a data warehouse using SQL Server for a rental movie system.
                 Developed ETL processes using Microsoft Visual Studio (SSIS) to 
                 integrate and transform data from operational database sources. 
                 Utilized SQL Server Analysis Services (SSAS) for advanced data visualization 
                 and interactive exploration of rental movie data.`,
          loc: "Western University",
        },
        {
          name: "Olympic History Database",
          img: proimg, // Replace this with an image specific to this project, if available.
          desc: `Designed and implemented a PostgreSQL database for efficient storage and
                 retrieval of Olympic history data.
                 Created and managed an Olympic history data warehouse, implementing an
                 ETL pipeline using Airflow and Droid for efficient population and
                 management.
                 Utilized Superset for advanced data visualization, offering an interactive
                 platform to explore and present analyzed Olympic history data.
                 Leveraged advanced data analysis techniques, including machine learning 
                 with Apache Spark, to uncover valuable insights within the Olympic history data.`,
          loc: "Western University",
        },
        // Add more projects here if needed
      ];
      






    return (
        <div className='bg-black text-white flex-col justify-center'>
            <div className='text-6xl text-center'>
                Projects
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        img={project.img}
                        desc={project.desc}
                        loc={project.loc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects