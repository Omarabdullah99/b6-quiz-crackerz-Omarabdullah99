import React from 'react';

const QuizeCart = ({quizdata}) => {
    console.log("name",quizdata)
    return (
        <div className=''>
        <h1 className='text-2xl'>{quizdata.question}</h1>
        
           <div>
           {
            quizdata.options.map(data=>
                <div>
                <input type="radio" name={quizdata.id}  /><p>{data}</p>
                </div>
                 )
           }
           </div> 
        </div>
    );
};

export default QuizeCart;