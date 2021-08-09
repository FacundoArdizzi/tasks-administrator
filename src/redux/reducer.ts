import { Actions } from './actions/index'
import { ADD_TODO, DELETE_TODO, FINISH_TODO, IState, ITodo, UNFINISH_TODO } from './constants/index'

const initialState: IState = {
    todos: [],
    finishedTodos: [],
}

const rootReducer = (state = initialState, action: Actions): IState => {
    switch(action.type) {
        case ADD_TODO: return <IState> {
            ...state, 
            todos: [action.payload, ...state.todos]
        }
        case DELETE_TODO: return <IState> {
            ...state,
            todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload),
            finishedTodos: state.finishedTodos.filter((todo: ITodo) => todo.id !== action.payload)
        }
        case FINISH_TODO: 
        let todo = state.todos.find((todo: ITodo) => todo.id === action.payload)
        return <IState> {
            ...state, 
            todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload),
            finishedTodos: [todo, ...state.finishedTodos]
        }
        case UNFINISH_TODO: 
        let t = state.finishedTodos.find((todo: ITodo) => todo.id === action.payload)
        return <IState> {
            ...state, 
            todos: [t, ...state.todos],
            finishedTodos: state.finishedTodos.filter((todo: ITodo) => todo.id !== action.payload)
        }
        default: return state
    }
}

export default rootReducer