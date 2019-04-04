import * as ActionConstant from './ActionConstants';
import { IMyTodoItem, IMyToggleTodo, IMySetFilter } from './../interfaces/StateInterface';

class ActionGetter {
    private mTaskId: number;

    constructor() {
        this.mTaskId = 0;
    }

    getAddTodoAction(taskContent: string): IMyTodoItem {
        return {
            finished: false,
            id: this.mTaskId ++,
            text: taskContent,
            type: ActionConstant.ACTION_TYPE_ADD_TODO
        };
    }

    getToggleTodoAction(id: number): IMyToggleTodo {
        return {
            id,
            type: ActionConstant.ACTION_TYPE_TOGGLE_TODO
        };
    }

    getSetFilterAction(visibilityFilter?: string): IMySetFilter {
        return {
            filter: visibilityFilter || ActionConstant.ACTION_TYPE_FILTER.SHOW_ALL,
            type: ActionConstant.ACTION_TYPE_SET_FILTER
        };
    }
}

const actionGetter: ActionGetter = new ActionGetter();
export default actionGetter;