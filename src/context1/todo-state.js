import React ,{useReducer} from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './todo-actions'


const ToDoState= (props)=>{

    const initialState = {
        todo : [],
    };

    const [state, dispatch] = useReducer(todoReducer, initialState)

    //Add to do

    const addTodo = (todo)=>{
        dispatch({
            type: ADD_TODO,
            payload : todo
        })
    }

    //Toggle todo
    const toggleTodo = (todoId) =>{
        dispatch({
            type : TOGGLE_TODO,
            payload : todoId
        })
    }

    //Del todo

    const deleteTodo = (todoId) =>{
        dispatch({
            type : DEL_TODO,
            payload : todoId
        })
    }


    return(
        <TodoContext.Provider value={{todo : state.todo, addTodo, toggleTodo, deleteTodo}}>
            {props.children}
        </TodoContext.Provider>

    )
};

export default ToDoState