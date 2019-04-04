import * as React from 'react';
import MyContent from './MyContent';
import MyFooter from './MyFooter';

import './../styles/MyHello.css';

export default class MyHello extends React.Component {
    
    render() {
        return (
            <div className="myhello-root">
                <MyContent hasFlag={true} content='This Content is from App.'/>
                <MyFooter />
            </div>
        )
    }
}