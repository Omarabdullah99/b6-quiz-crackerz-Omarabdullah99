import React from 'react';

const SingleTopic = ({data}) => {
    const {id,name,logo,total}=data
    return (
        <div className='bg-yellow-400 w-72 h-96 p-10 my-10 rounded shadow-xl relative'>
            <img src={logo} alt="" />
            <div className='flex items-center justify-between absolute bottom-0'>
            <p className='text-xl text-blue-600 font-bold'>{name}</p>
            <button className='bg-white py-3 px-2 ml-10  shadow-lg  rounded'>Start Practice</button>
            </div>
        </div>
    );
};

export default SingleTopic;