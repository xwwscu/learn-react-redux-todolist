import { Dispatch } from 'redux';

export interface ITodoAppProps {
    dispatch: Dispatch<IAction>;
}

export interface IAction {
    type: string
}

export interface IMyTodoItem extends IAction {
    id: number,
    finished: boolean,
    text: string
}

export interface IMyToggleTodo extends IAction {
    id: number
}

export interface IMySetFilter extends IAction {
    filter: string
}

export interface IMyState {
    visibilityFilter: string,
    todos: IMyTodoItem[]
}

export interface IMyAction extends IAction {
    id: number,
    filter: string,
    text: string
}