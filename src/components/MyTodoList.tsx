import * as React from 'react';
import MyTodo  from './MyTodo';
import { IMyTodoItem } from '../interfaces/StateInterface';
/**
 * this is not used! see MyTodoListContainer!
 * @param toggleTodo 
 * @param todos 
 */
const MyTodoList = (toggleTodo: (id: number) => void, todos?: IMyTodoItem[]) => {
    function handleClick(id: number) {
        return () => toggleTodo(id);
    }
    return (
        todos && Array.isArray(todos) ?
        <ul>
            { 
                // tslint:disable-next-line:jsx-no-lambda
                todos.map(todo => <MyTodo key={todo.id} {...todo} toggleTodo={handleClick(todo.id)} />)
            }
        </ul>
        : <div>还没有代办项!</div>);
};


export default MyTodoList;