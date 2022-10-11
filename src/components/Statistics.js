import React,{ PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// 
const Statistics = () => {
   
    const loaderdata = useLoaderData();
  const data = loaderdata.data;
  console.log(data)
    return (
      <div className=' h-64 w-64 lg:h-96 lg:w-96 mx-auto mt-10'>
       <ResponsiveContainer width="100%" height="100%">
       <BarChart width={500} height={400} data={data}>
       <Bar dataKey="total" fill="#8884d8" />
       <XAxis dataKey="name"></XAxis>
       <YAxis></YAxis>
       <Tooltip></Tooltip>
     </BarChart>
       </ResponsiveContainer>
            
        </div>

    );
};

export default Statistics;