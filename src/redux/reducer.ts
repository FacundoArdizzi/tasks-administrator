import { stat } from 'fs'
import { Actions } from './actions/index'
import { ADD_TODO, DELETE_TODO, FINISH_TODO, IState, ITodo, SHOW } from './constants/index'

const initialState: IState = {
    todos: [],
    finishedTodo: [],
    show: '',
}

const rootReducer = (state = initialState, action: Actions): IState => {
    switch(action.type) {
        case ADD_TODO: return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
        case FINISH_TODO: 
        let todo = state.todos.filter((todo: ITodo) => todo.id === action.payload)
        return {
            ...state, 
            finishedTodo: state.finishedTodo.concat(todo)
        }
        case SHOW: return {
            ...state,
            show: action.payload,
        }
        default: return state
    }
}

export default rootReducer;