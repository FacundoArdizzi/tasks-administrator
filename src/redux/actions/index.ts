import { ADD_TODO, DELETE_TODO, FINISH_TODO, ITodo } from "../constants";

export interface IAddTodoAction {
    type: ADD_TODO, 
    payload: ITodo,
}

export interface IDeleteTodoAction {
    type: DELETE_TODO, 
    payload: number, 
}

export interface IFinishTodoAction {
    type: FINISH_TODO, 
    payload: number, 
}

export type Actions = IAddTodoAction | IDeleteTodoAction |   IFinishTodoAction

export const AddTodo = (payload: ITodo): IAddTodoAction => {
    return { type: ADD_TODO, payload: payload}
}

export const DeleteTodo = (num: number): IDeleteTodoAction => {
    return { type: DELETE_TODO, payload: num}
}

export const FinishTodo = (num: number): IFinishTodoAction => {
    return { type: FINISH_TODO, payload: num}
}