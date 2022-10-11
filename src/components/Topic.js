import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleTopic from "./SingleTopic";

const Topic = () => {
  const loaderdata = useLoaderData();
  const datas = loaderdata.data;
  console.log(datas);
  return (
    <div className="w-9/12 mx-auto my-10 ">
      <div>
        <img
          className="h-96 w-full"
          src="https://img.freepik.com/premium-vector/quiz-text-speech-symbols-concept_149152-641.jpg?w=2000"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
      {
        datas.map(data=><SingleTopic key={data.id} data={data}></SingleTopic>)
      }
      </div>
    </div>
  );
};

export default Topic;
