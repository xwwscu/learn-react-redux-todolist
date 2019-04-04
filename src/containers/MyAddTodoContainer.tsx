import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { IAction } from './../interfaces/StateInterface';
import actionGetter from '../actions/ActionsGetter';

interface IAddTodoProps {
    toggleDispatch: (action: string) => void;
}

class MyAddTodoContainer extends React.Component<IAddTodoProps> {
    render() {
        const dispatchAddTodo  = this.props.toggleDispatch;
        let input: HTMLInputElement | null;
        function handleSubmit(e: React.FormEvent) {
            e.preventDefault();
            if (!input || !input.value.trim()) {
                return;
            }
            dispatchAddTodo(input.value.trim());
            input.value = '';
        };
        return (
            <div>
                <form
                    onSubmit={handleSubmit}>
                    <input ref={node => (input = node)} />
                    <button type='submit'>增加todo项</button>
                </form>
            </div>
        );
    }
}

/* const MyAddTodo1 = (toggleDispatch: (action: string) => void) => {
    let input: HTMLInputElement | null;
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!input || !input.value.trim()) {
            return;
        }
        toggleDispatch(input.value.trim());
        input.value = '';
    };

    return (
        <div>
            <form
                onSubmit = {handleSubmit}>
                <input ref={node => (input = node)}/>
                <button type='submit'>增加todo项</button>
            </form>
        </div>
    );
} */


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggleDispatch: (action: string) => {
            dispatch(actionGetter.getAddTodoAction(action))
        }
    }
} 

const WrapperAddTodoContainer = connect(null, mapDispatchToProps)(MyAddTodoContainer);
export default WrapperAddTodoContainer;