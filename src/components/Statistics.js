import React,{ PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// 
const Statistics = () => {
   
    const loaderdata = useLoaderData();
  const data = loaderdata.data;
  console.log(data)
    return (
        <div className='w-2/4 mx-auto mt-10'>
        
       <BarChart width={500} height={400} data={data}>
       <Bar dataKey="total" fill="#8884d8" />
       <XAxis dataKey="name"></XAxis>
       <YAxis></YAxis>
       <Tooltip></Tooltip>
     </BarChart>
        
        
      
        </div>
    );
};

export default Statistics;