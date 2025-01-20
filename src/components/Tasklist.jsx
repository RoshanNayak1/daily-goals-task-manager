import React from 'react'

const Tasklist = ({title, description,deleteTask,index}) => {
  return (
    <div className='tasklist'>
        <div>

            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick={()=>{deleteTask(index)}}> - </button>
       
        </div>
  )
}

export default Tasklist