import * as React from 'react';
import { Provider } from 'react-redux';
// import MyTodoApp from './MyTodoApp';
import MyTodoAppContainer from './../containers/MyTodoAppContainer';
import myStore from './../stores/MyStore';

interface IContentProps {
    hasFlag?: boolean,
    content?: string
}

interface IContentState {
    hasUserInfo: boolean
}

export default class MyContent extends React.Component<IContentProps, IContentState> {
    
    static defaultProps: Partial<IContentProps> = {
        content: 'Hello MyContent',
        hasFlag: false
    }

    constructor(props: IContentProps) {
        super(props);
        this.state = {
            hasUserInfo: this.props.hasFlag ? this.props.hasFlag : false
        }
    }

    render() {
        const { hasFlag, content } = this.props;
        let contentInfo = content;
        if (hasFlag) {
            contentInfo += "\n Prop has Flag~";
        } else {
            contentInfo += '\n Props has no flag.';
        }
        return (
            <div className="myhello-content">
                <span>
                    { contentInfo }
                </span>
                <Provider store={myStore}>
                    <MyTodoAppContainer />
                </Provider>

            </div>
        )
    }
}