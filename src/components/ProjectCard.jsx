import React from 'react'
import { useState } from 'react'
import ProjectDetail from './ProjectDetail'
const ProjectCard = (props) => {
    const [ShowDetail, setShowDetail] = useState(false)
    const detailpopup = () => {
        if (ShowDetail) {
            return (
                <ProjectDetail
                    name={props.name}
                    img={props.img}
                    desc={props.desc}
                    loc={props.loc}
                    onClose={() => setShowDetail(false)}
                />
            );
        }
        return null;
    }
    return (
        <div className='flex flex-col border-2 rounded-4xl border-blue-300 p-6'>
            <div className='flex flex-col items-center text-center'>
                <img className='w-[100%] rounded-2xl' src={props.img} alt="" />
                <div className='text-xl font-semibold mt-4'>{props.name}</div>

            </div>
            <div className='flex justify-center mt-8'>
                <button className='border-2 p-2 rounded-3xl' onClick={() => setShowDetail(!ShowDetail)}>Show Details</button>
            </div>
            {detailpopup()}
        </div>


    )
}

export default ProjectCard