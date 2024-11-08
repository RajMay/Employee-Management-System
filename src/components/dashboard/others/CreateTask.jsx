import React, { useState, useSyncExternalStore, useContext  } from "react";
import NewTask from "../../TaskList/NewTask";
import { setLocalStorage } from '../../../utils/localStorage'
import { AuthContext } from '../../../context/AuthProvider'



const CreateTask = () => {
  

  const [userData,setuserData]=  useContext(AuthContext)
  const [taskTitle, settaskTitle] = useState('')
  const [taskdescription, settaskdescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [AsignTO, setAsignTO] = useState('')
  const [category, setcategory] = useState('')

  const [task, settask] = useState({})

  

  const submitHandler =(e)=>{
    e.preventDefault()

    settask({taskTitle,taskdescription,taskDate,category,AsignTO,active:false ,newTask:true, failed:false , completed:false})




 const data = userData

   data.forEach(function(elem){
    if(elem.firstName === AsignTO){
      elem.tasks.push(task)
      elem.taskcount.newTask = elem.taskcount.newTask +1
      
     
      
      }
   })      
setuserData(data)
console.log(data);


   settaskTitle('')
    settaskDate('')
    settaskdescription('')
    setcategory('')
   setAsignTO('')
   

  }


  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex flex-wrap w-full  items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Task title</h3>
            <input 

              value={taskTitle}
              onChange={(e)=>{
                settaskTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
              type="text"
              placeholder=" Enter the task"
            ></input>
          </div>


          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{
              settaskDate(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
              type="date"
              placeholder="dd/mm/yy"
            ></input>
          </div>



          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">Assign To</h3>
            <input
            value={AsignTO}
            onChange={(e)=>{
              setAsignTO(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
              type="text"
            ></input>
          </div>



          <div>
            <h3 className="text-sm text-grey-300 mb-0.5">category</h3>
            <input
            value={category}
            onChange={(e)=>{
              setcategory(e.target.value)
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4"
              type="text"
              placeholder="Design, Developement, etc"
            ></input>
          </div>
        </div>



        <div className="w-1/2">
          <h3 className="text-sm text-grey-300 mb-0.5">Description</h3>
          <textarea
          value={taskdescription}
          onChange={(e)=>{
            settaskdescription(e.target.value)
          }}
            className="w-full h-45 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400"
            name=""
            id=""
            cils="30"
            rows="10"
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
