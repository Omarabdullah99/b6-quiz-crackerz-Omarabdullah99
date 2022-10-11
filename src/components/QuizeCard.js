import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizeCart = ({quizdata}) => {

    const correctAnswerShow=()=>{
        toast(quizdata.correctAnswer )
        console.log('hii')

    }
    
    const correct=(correctAnswer)=>{
        console.log(correctAnswer)


        
        if(correctAnswer ===quizdata.correctAnswer ){
            toast("Correct Answer")
        }
        else{
            toast("Wrong Answer")
        }
    }
    
    
    console.log("name",quizdata)
    return (
        <div className='w-9/12 mx-auto my-10'>
        <div className='flex items-center justify-between'>
        <h1 className='text-xl'>{quizdata.question}</h1>
        <EyeIcon onClick={correctAnswerShow} className="h-6 w-6 text-blue-500"/>
        </div>
        
           <div className='grid grid-cols-2 gap'>
           {
            quizdata.options.map(data=>
                <div className='border p-5 flex gap-2 items-center '>
                <input onChange={()=>correct(data)} type="radio" name={quizdata.id} value={data}  /><p>{data}</p>
                

                </div>
                 )
           }

           </div> 
           <ToastContainer />
        </div>
    );
};

export default QuizeCart;