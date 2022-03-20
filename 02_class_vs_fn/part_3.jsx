/** SLIDE #22 **/
/**************************** */
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

/** SLIDE #24 **/
/**************************** */

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

/** SLIDE #25 **/
/**************************** */

increaesValue = () => {
  this.state.counterValue += 1;
  console.log(this.state.counterValue);
}

/** SLIDE #27 **/
/**************************** */

increaesValue = () => {
  this.setState({
    counterValue: this.state.counterValue + 1
  })
}

/** SLIDE #28 **/
/**************************** */

increaesValue = () => {
  this.setState(currentState => ({
    counterValue: currentState.counterValue + 1
  }));
}