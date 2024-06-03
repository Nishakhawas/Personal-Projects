import React, { useState } from 'react'
import "./CSS/todo.css"

function generateId(){
  return Math.floor(Math.random()*100)
}

export default function Todo() {
    const[todos,setTodos]=useState([])
    const[input,setInput]=useState('')

    const handleSubmit = ()=>{
        setTodos(todos=>
            todos.concat({
              text:input,
              id:generateId()    
            })
            )
            // alert("Todos create successfully")
        setInput("")
    }
    const removeTodo =(id)=>
      setTodos((todos)=>todos.filter((t)=>t.id!==id))
    

  return (
    <>
    <div className='container'>
      <input className='text'type="text" placeholder= 'New Todo'  value={input} onChange={(e)=>setInput(e.target.value)}/>
     <button className='button' onClick={handleSubmit}>Submit</button>
      

      <ol className="todo-list">
        {
          todos.map(({text,id})=>(
            <li key={id} className='todo'>
              <span>{text}</span>
              <button className='close' onClick={()=>removeTodo(id)}>x            
              </button>
            </li>
          ))
        }
        
      </ol>
      </div>
    
    </>
  )
}
