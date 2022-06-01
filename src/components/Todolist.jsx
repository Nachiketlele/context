import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import Style from "./Todo.module.css"
const Todolist = () => {
    const {deleteTodo,ischecked,Completed,todos} = useContext(TodoContext)
  return (
    <div>
           {todos.map((todo,index)=>(
            <div key={index}>
                <div>
                     <input type="checkbox" checked={Completed} onChange={ischecked} />
                     <p className={Completed? Style.c:"" }> {todo} </p>
                </div>
            <button onClick={()=>deleteTodo(todo)}>delete</button>
            </div>
           ))}
           
    </div>
  )
}

export default Todolist