import React from 'react'

const Complete = () => {
  return (
    
         <div className=" flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="px-4 py-1 mt-2">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl px-6 font-semibold">{data.title}</h2>
        <p className="text-sm px-4 mt-3"> {data.description}
          

        </p>
      
      
      <div className="mt-6 ">
        <button className="w-full bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full">
          Mark as Completed
        </button>
        
      </div>
   </div>
  )
}

export default Complete