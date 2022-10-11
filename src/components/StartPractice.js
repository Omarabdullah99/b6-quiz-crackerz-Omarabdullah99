import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeCart from './QuizeCard';

const StartPractice = () => {

    const loaderDetails=useLoaderData();
    const detailsData=loaderDetails.data
    const quizeDatas=detailsData.questions
    

    const {name}=detailsData
   
    return (
        <div>
            <h1 className='text-3xl mt-5 font-bold text-blue-600 text-center'>This is {name}</h1>
           <div>
           {
            quizeDatas.map(quizdata=> <QuizeCart key={quizdata.id} quizdata={quizdata}></QuizeCart>)
           }
           </div>

        </div>
    );
};

export default StartPractice;