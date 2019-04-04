import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MyTodo from './../components/MyTodo';
import { IMyTodoItem, IMyState } from './../interfaces/StateInterface';
import * as ActionConstants from './../actions/ActionConstants';
import actionGetter from './../actions/ActionsGetter';

const getVisibleTodos = (todos: IMyTodoItem[], filter: string) => {
    switch(filter) {
        case ActionConstants.ACTION_TYPE_FILTER.SHOW_ALL:
            return todos;
        case ActionConstants.ACTION_TYPE_FILTER.SHOW_FINISHED:
            return todos.filter(todo => todo.finished);
        case ActionConstants.ACTION_TYPE_FILTER.SHOW_UNFINISHED:
            return todos.filter(todo => !todo.finished);
        default:
            return todos;
    }
}

const mapStateToProps = (state: IMyState) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggleTodo: (id: number) => {
            dispatch(actionGetter.getToggleTodoAction(id));
        }
    }
}

interface ITodoListProps {
    todos: IMyTodoItem[],
    toggleTodo: (id: number)=>void
}

class MyTodoListContainer extends React.Component<ITodoListProps> {
    
    /* shouldComponentUpdate(nextProps: ITodoListProps) {
        
        return true;
    } */

    render() {
        // const toggleClick = this.props.toggleTodo;
        // const todos = this.props.todos;
        const { todos, toggleTodo } = this.props;
        return (
            <ul>
                    {
                        todos.map(todo => 
                        <MyTodo 
                            key={todo.id} 
                            {...todo} 
                            toggleTodo={toggleTodo} />)
                    }
            </ul>
        );
    }
}

const WrapperTodoListContainer = connect(mapStateToProps, mapDispatchToProps)(MyTodoListContainer);
export default WrapperTodoListContainer;