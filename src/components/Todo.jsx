import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Todo = () => {
    const {value,addTodos,handleChange} = useContext(TodoContext)
  return (
    <div>
        <input value={value} onChange={handleChange} type="text" />
        <button onClick={()=>{addTodos(value) 
            console.log(value)}}>Add Todo</button>
    </div>
  )
}

export default Todo