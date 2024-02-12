import React from 'react'

const Highlights = ({stats}) => {
  return (
    <div className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-center" >
        <h2 className="text-sm mt-2">{stats.title} </h2>
    
    <div className='mt-2' >
       <span className ='text-4xl font-bold'> {stats.value} </span>
    <span className='text-2xl' >{stats.unit} </span>
    </div>

 { stats.direction ? (
   <div className='mt-2 flex'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
  </svg>
   <div className='ms-2'>{stats.direction} </div> 
 
  </div> 
) : null
}

{stats.title == "Humidity" ? ( 

 <div className='w-full mt-4 bg-gray-200 rounded full h-1.5 mb-4 dark:bg-gray-700'>
    <div className='bg-blue-600 h-1.5 rounded-full dark:bg-blue-500' style={{width: `${stats.value}%` }}>

    </div>
 </div>
) : null }  
    </div>
 

  )
}

export default Highlights