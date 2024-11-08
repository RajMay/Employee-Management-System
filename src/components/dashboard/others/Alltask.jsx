import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const Alltask = () => {


  const [userData,setuserData]=  useContext(AuthContext)
 
  return (
    <div className='bg-[#1C1C1C] p-5 mt-5  rounded'>
        <div className='text-semibold bg-violet-600 mb-3 py-2 px-4 flex justify-between rounded'>

<h2 className='text-xl font-medium w-1/5 bg-violet-600 text-bold'>Employee Name</h2>
<h3 className='text-xl font-medium w-1/5 bg-violet-600 text-bold'>New Task</h3>
<h5 className='text-xl font-medium w-1/5 bg-violet-600 text-bold'>Active Task</h5>
<h5 className='text-xl font-medium w-1/5 bg-violet-600 text-bold'>Completed</h5>
<h5 className='text-xl font-medium w-1/5 bg-violet-600 text-bold'>Failed</h5>

</div>


       <div className='h-[80%] '>
       {userData.map(function(elem, idx ){


       return   <div key={idx} className='text-semibold border-2 border-emerald-500 mb-3 py-2 px-4 flex justify-between rounded'>

  <h2 className='text-xl font-medium w-1/5 '>{elem.firstName}</h2>
  <h3 className='text-xl font-medium w-1/5 text-Blue-400'>{elem.taskcount.newTask}</h3>
  <h5 className='text-xl font-medium w-1/5 text-yellow-400'>{elem.taskcount.active}</h5>
  <h5 className='text-xl font-medium w-1/5 text-white-600'>{elem.taskcount.completed}</h5>
  <h5 className='text-xl font-medium w-1/5 text-red-600 '>{elem.taskcount.failed}</h5>
</div>



})}
       </div>




    </div>
  )
}

export default Alltask