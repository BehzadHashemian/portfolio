import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard'
import proimg from '../assets/sql.webp'
import rentalmovie from '../assets/sql-movie.jpg'
import olympic from '../assets/olympic.jpg'
import driver from '../assets/driver.jpg'
import kuber from '../assets/kuber.jpg'
import music from '../assets/music.jpg'
import bank from '../assets/bank.jpg'

const Projects = () => {

  const projectsData = [
    {
      name: "Rental Movie Data Warehouse",
      img: rentalmovie,
      desc: [
        "Built a data warehouse using SQL Server for a rental movie system.",
        "Developed ETL processes using Microsoft Visual Studio (SSIS) to integrate and transform data from operational database sources.",
        "Utilized SQL Server Analysis Services (SSAS) for advanced data visualization and interactive exploration of rental movie data."
      ],
      loc: "Western University"
    },
    {
      name: "Olympic History Database",
      img: olympic,
      desc: [
        "Designed and implemented a PostgreSQL database for efficient storage and retrieval of Olympic history data.",
        "Created and managed an Olympic history data warehouse, implementing an ETL pipeline using Airflow and Droid for efficient population and management.",
        "Utilized Superset for advanced data visualization, offering an interactive platform to explore and present analyzed Olympic history data.",
        "Leveraged advanced data analysis techniques, including machine learning with Apache Spark, to uncover valuable insights within the Olympic history data."
      ],
      loc: "Western University"
    },
    {
      name: "Real-Time Driver State Recognition System",
      img: driver,
      desc: [
        "Developed a real-time driver state recognition system using TensorFlow and neural networks.",
        "Designed and implemented an optimized neural network architecture for high accuracy and real-time processing.",
        "Showcased proficiency in neural network design, training, and optimization."
      ],
      loc: "Western University"
    },
    {
      name: "Website Deployment with Kubernetes and CI/CD",
      img: kuber,
      desc: [
        "Deployed a web application into the cloud using cloud computing technologies.",
        "Utilized Kubernetes for container orchestration, enabling scalability and efficient application management.",
        "Implemented DevOps practices, including CI/CD, to automate deployment and ensure continuous delivery of changes and updates to the website."
      ],
      loc: "Western University"
    },
    {
      name: "Music and Playlist Management Website",
      img: music,
      desc: [
        "Developed a single-page application music database and playlist management system using HTML, CSS, JavaScript, React, and MySQL.",
        "Implemented a user-friendly interface for creating, editing, and searching personalized playlists.",
        "Leveraged Amazon Web Services (AWS) for secure and scalable deployment, ensuring seamless playlist management and data storage.",
        "Created an admin web page to manage the website, providing functionality to add and remove users and songs for efficient website management."
      ],
      loc: "Western University"
    },
    {
      name: "Banking Sample Responsive Website",
      img: bank,
      desc: [
        "Built a banking website using React, Vite, and Tailwind CSS...",
        "Utilized Vite for fast build times and optimized development workflow...",
        "Leveraged React’s component-based architecture for dynamic content and state management, while Tailwind CSS provided a responsive, utility-first design."
      ],
      loc: "Personal",
    },
  ];
  const [projectsDatas, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/project/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setProjectsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);



  console.log(projectsDatas)


  return (
    <div id="project" className='bg-black text-white flex-col justify-center'>
      <div className='text-6xl text-center font-bold py-6 pb-10'>
        Projects
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectsDatas.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            img={`http://127.0.0.1:8000${project.img}`}
            desc={project.desc}
            loc={project.loc}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects