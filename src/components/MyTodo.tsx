import * as React from 'react';

export interface ITodoProps {
    finished: boolean,
    id: number,
    text: string,
    toggleTodo: (id: number) => void
}

function MyTodo(todoItem: ITodoProps) {
    const toggleClick = todoItem.toggleTodo;
    return (
        <li 
            // tslint:disable-next-line:jsx-no-lambda
            onClick={() => toggleClick(todoItem.id)}
            style={
                {textDecoration: todoItem.finished ? 'line-through' : 'none'}
            }>
            {todoItem.text}
        </li>
    );
}

export default MyTodo;