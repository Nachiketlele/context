import React from "react"
import { useState } from "react"
import { createContext } from "react"

export const TodoContext = createContext()

export const TodoProvider = ({children}) =>{
    const [value,setValue] = useState("")
    const [todos,setTodos] = useState([])
    const [Completed,setCompleted] = useState(false)

    const addTodos = (newTodos) =>{
        setTodos([...todos,newTodos])
        setValue("")
    }

    const handleChange = (e) =>{
        setValue(e.target.value)
    }
 
    const deleteTodo = (value) =>{
            setTodos(todos.filter((todo)=>todo!==value))
    }

    const ischecked = (e) =>{
        setCompleted(e.target.checked)
    }
     
  return  <TodoContext.Provider value={{value,setValue,todos,addTodos,handleChange,deleteTodo,ischecked,Completed}}>{children}</TodoContext.Provider>
}