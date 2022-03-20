import React from 'react';

class Header extends React.Component {

    render() {
        return <h2>React Header Component</h2>
    }

}

export default App;

//*****************************************

class Counter extends React.Component {

    constructor(props) {
      super(props);
      this.state = { counterValue: 0 };
    }
  
    render() {
      return (
        <h2>{this.state.counterValue}</h2>
      )
    }
  
  }

  //*****************************************

  class Counter extends React.Component {

    constructor(props) {
      super(props);
      this.state = { counterValue: 0 };
    }
  
    increaesValue = () => {
      this.state.counterValue += 1;    
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.counterValue}</h2>
          <button onClick={this.increaesValue}>increaes</button>
        </div>
      )
    }
  
  }

  //*****************************************

  class Counter extends React.Component {

    constructor(props) {
      super(props);
      this.state = { counterValue: 0 };
    }
  
    increaesValue = () => {
      this.state.counterValue += 1;    
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.counterValue}</h2>
          <button onClick={this.increaesValue}>increaes</button>
        </div>
      )
    }
  
  }

//*****************************************


  increaesValue = () => {
    this.setState(currentState => ({
      counterValue: currentState.counterValue + 1
    }));
  }