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
        <div className='flex flex-col border-2 justify-between mx-2 px-2 py-6 rounded-4xl border-blue-300 shadow-[0_0_15px_3px_rgba(0,191,255,0.6)]' >
            <div className='flex flex-col items-center text-center px-2'>
                <img className='w-[100%] rounded-2xl' src={props.img} alt="" />
                <div className='text-lg font-semibold mt-4'>{props.name}</div>

            </div>
            <div className='flex justify-center mt-2'>
                <button className='border-2 p-2 rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-400 hover:border-blue-500' onClick={() => setShowDetail(!ShowDetail)}>Show Details</button>
            </div>
            {detailpopup()}
        </div>


    )
}

export default ProjectCard