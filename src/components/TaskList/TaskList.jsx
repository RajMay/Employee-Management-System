import React from "react";
import Accept from "./Accept";
import NewTask from "./NewTask";
import Complete from "./Complete";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  
  return (
    <div
      id="tasklist"
      className=" h-[55%] overflow-x-auto flex items-center justify-start gap-10 flex-nowrap w-full py-5  mt-10"
    >
     
      {data.tasks.map((elem)=>{
        if(elem.active){
          return <Accept key={elem.id} data={elem} />
        }

        if(elem.NewTask){
          return <NewTask key={elem.id} data={elem} />
        }

        if (elem.Complete){
          return <Complete key={elem.id} data={elem} />

         
        }

        if(elem.FailedTask){
          return <FailedTask key={elem.id} data={elem} />
        }
      })}
      
      
    </div>
  );
};

export default TaskList;
