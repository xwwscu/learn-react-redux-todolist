import * as React from 'react';
// import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import WrapperAddTodoContainer from './MyAddTodoContainer';
import WrapperTodoListContainer from './MyTodoListContainer';
import WrapperLinkContainer from './MyLinkContainer';
import { IMyState } from './../interfaces/StateInterface';

const mapStateToProps = (state: IMyState) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

class MyTodoAppContainer extends React.Component {

    render() {
        // const appProps = this.props;
        return (
            <div>
                <WrapperAddTodoContainer />
                <WrapperTodoListContainer />
                <WrapperLinkContainer />
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(MyTodoAppContainer);