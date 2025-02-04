import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='flex-col'>
        <div className='flex items-center'>
            <img className='w-10' src={props.img} alt="" />
            <div>{props.name}</div>
        </div>
        <div className='text-gray-400 italic'>
            {props.loc}
        </div>
        <div>
            {props.desc}
        </div>
    </div>
  )
}

export default ProjectCard