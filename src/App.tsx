import * as React from 'react';
import MyHello from './components/MyHello';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyHello />
      </div>
    );
  }
}

export default App;
