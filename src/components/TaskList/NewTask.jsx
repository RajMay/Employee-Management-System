import React from 'react'

const NewTask = () => {
  return (
    

<div className=" flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="px-4 py-1 mt-2">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl px-6 font-semibold">{data.title}</h2>
        <p className="text-sm px-4 mt-3"> 
          {data.description}

        </p>

        <div className="flex justify-between p-4 mt-4">
        <button className="bg-blue-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 p-4 text-sm">Mark as Failed</button>
      </div>
      </div>
  
  )
}

export default NewTask