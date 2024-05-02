import {ADD_TODO, DEL_TODO, TOGGLE_TODO} from './todo-actions'

const todoReducer = (action)=>{
    switch(action.type){
        case ADD_TODO:
            return {};
        case TOGGLE_TODO:
            return {};
        case DEL_TODO:
            return {};
        default:
            return false

    }
}

export default todoReducer