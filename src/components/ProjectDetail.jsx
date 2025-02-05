import React from 'react';

const ProjectDetail = (props) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
            <div className='flex flex-col border-2 rounded-4xl w-[90%] md:w-[70%] lg:w-[50%] border-blue-300 p-6'>

                <div className='flex flex-col'>
                    <div className='flex'>
                    <img className='w-[70%] rounded-2xl mx-auto' src={props.img} alt="" />
                    <button 
                    className='absolute top-3 right-3 text-white rounded-full px-3 py-1 text-lg font-bold hover:bg-red-600 transition'
                    onClick={props.onClose} 
                >
                    ✕
                </button>
                    </div>
                    
                    <div className='text-xl font-semibold mt-4'>{props.name}</div>
                    <div className='italic text-gray-300 mt-4'>{props.loc}</div>
                </div>
                <div className='mt-4'>
                    {props.desc.map((paragraph, index) => (
                        <p key={index} className=''>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
