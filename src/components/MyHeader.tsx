import * as React from 'react';
import '../styles/MyHello.css';

export default class MyHeader extends React.Component {
    render() {
        return (
            <header className='header'>
                <span>News</span>
            </header>
        )
    }
}