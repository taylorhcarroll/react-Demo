import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log("taco is", this.props.taco);
    const fullName = <p>{this.props.taco.first} {this.props.taco.last}</p>
    //this is a comment
    return (
      <div className="App">
        {/*this is another comment*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section>
            Hello gorgeous, {this.props.taco.first} {this.props.taco.last}
        </section>
        <section>
        Goodbye, {fullName}
        </section>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

  export default App;
