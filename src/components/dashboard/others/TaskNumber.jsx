import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen s'>

    <div className='rounded-xl w-1/4 py-6 px-9 bg-blue-400'>
       <h2 className='text-3xl font-semibold'>{data.taskcount.newTask}</h2>
       <h3 className='text-xl font-medium'>New Task</h3>

    </div>


    <div className='rounded-xl w-1/4 py-6 px-9 bg-pink-400'>
       <h2 className='text-3xl font-semibold'> {data.taskcount.completed}</h2>
       <h3 className='text-xl font-medium'>Completed</h3>

    </div>

    
    <div className='rounded-xl w-1/4 py-6 px-9 bg-emerald-400'>
       <h2 className='text-3xl text-black  font-semibold'>{data.taskcount.active}</h2>
       <h3 className='text-xl text-black font-medium'>Accepted</h3>

    </div>

    <div className='rounded-xl w-1/4 py-6 px-9 bg-yellow-400'>
       <h2 className='text-3xl font-semibold'>{data.taskcount.failed}</h2>
       <h3 className='text-xl font-medium'>Failed</h3>

    </div>


    </div>
  )
}

export default TaskNumber