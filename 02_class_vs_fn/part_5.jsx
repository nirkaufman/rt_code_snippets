/** SLIDE #46 **/
/**************************** */

import { useState } from "react";
import { useStore } from "react-redux";

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  increase = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.increase}>increaes</button>
      </div>
    )
  }
}

function Counter(props) {
  const [value, setValue] = useState(0);

  const increaes = () => {
    setValue(value + 1);
  }

  return (
    <div>
        <h2>{value}</h2>
        <button onClick={increase}>increaes</button>
      </div>
  )

}