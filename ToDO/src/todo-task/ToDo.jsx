import React from 'react'
import { createContext,useContext } from 'react'




export const ToDo = createContext({
    todos:[
        {
            id:1,
            todo:"ToDo msg",
            completed:false,
        }
    ],
    //functionality
    addToDo :(todo)=>{},
    updatedToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useToDo =()=>{
    return useContext(ToDo)
}
 
 export const ToDoprovider =ToDo.Provider
