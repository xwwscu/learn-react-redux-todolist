import * as ActionConstants from '../actions/ActionConstants';
import { IMyState, IMyAction } from './../interfaces/StateInterface';

export default class MyReducer {

    reduceAction(state: IMyState = {todos: [], 
        visibilityFilter: ActionConstants.ACTION_TYPE_FILTER.SHOW_ALL}, 
        action: IMyAction): IMyState {
        if (!action) {
            return state;
        }
        switch (action.type) {
            case ActionConstants.ACTION_TYPE_SET_FILTER: {
                return Object.assign({}, state, {
                    visibilityFilter: action.filter || ActionConstants.ACTION_TYPE_FILTER.SHOW_ALL
                });
            }
            case ActionConstants.ACTION_TYPE_ADD_TODO:
                return Object.assign({}, state, {
                    todos: state.todos.concat({
                        finished: false,
                        id: action.id,
                        text: action.text,
                        type: ActionConstants.ACTION_TYPE_ADD_TODO
                    })
                });
            case ActionConstants.ACTION_TYPE_TOGGLE_TODO:
                // tslint:disable-next-line:only-arrow-functions
                return Object.assign({}, state, state.todos.map(function(todo) {
                    if(todo.id === action.id) {
                        todo.finished = !todo.finished;
                    }
                    return todo;
                }));
            default:
                return state;
        }
    }
}

/* todo.id === action.id ? 
                    {...todo, finished: !todo.finished }
                    : todo */