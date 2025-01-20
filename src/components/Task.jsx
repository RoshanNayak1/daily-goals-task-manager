import React, { useEffect, useState } from 'react'
import './Task.css'
import Tasklist from './Tasklist'
const Task = () => {

    const initialArray = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

    const [tasks, setTasks] = useState(initialArray)
    const [title, setTitle]=useState("")
    const [description, setDescription]=useState("")
    const [error, setError]= useState("");
    console.log(...tasks)
    const submitHandler=(e)=>{
          e.preventDefault();

          if(title.trim()==="" || description.trim()==="" ){
            setError("Both Title and Description are required");
            return;
          }
          else{ setError("")};
          setTasks([...tasks ,
            {
            title: title,
            description:description
          }]);
          console.log(...tasks)
         setTitle("");
         setDescription("");
    }

    const deleteTask=(index)=>{
       const filteredArray = tasks.filter((val,i )=>{
        return i !== index;
       });
       setTasks(filteredArray);
    };

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);

    useEffect(()=>{
        if(tasks.length ===0){
            setError("");
        }
    } ,[tasks]);
  return (
    <div className='container'>
        <h1>Daily Goals</h1>
<form onSubmit={submitHandler}>
<input type="text" placeholder='Title'  value={title} onChange={(e)=>
    setTitle(e.target.value)
}/>
<textarea name="" id="" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
<button type='submit'>ADD</button>
</form>

{error && <p className='error-msg'>{error}</p>}
{tasks.map((item, index)=>(
<Tasklist key={index} title={item.title} description={item.description} 
   deleteTask={()=>deleteTask(index)}
/>
))}
    </div>
  )
}

export default Task