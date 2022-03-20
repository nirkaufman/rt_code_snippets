/** SLIDE #33 **/
/**************************** */

class ComponentLifeCycle extends React.Component {

  // 01: Invoked first to create an instance
  constructor() { }

  // 02: Invoked second to create an element
  render() { }

  // 03: Invoked third when process is done
  componentDidMount() { }

}

/** SLIDE #36 **/
/**************************** */

class ComponentLifeCycle extends React.Component {

  // 01: Invoked first to create an instance
  constructor() { }

  // 02: Invoked second to create an element
  render() { }

  // 03: Invoked third when process is done
  componentDidMount() { }

  // 04: Invoked from now on after each render
  componentDidUpdate() { }
}

/** SLIDE #37 **/
/**************************** */

shouldComponentUpdate(nextProps, nextState) {
  return nextProps.value !== this.props.value;
} 

/** SLIDE #38 **/
/**************************** */

class ComponentLifeCycle extends React.Component {

  // 01: Invoked first to create an instance
  constructor() { }

  // 02: Invoked second to create an element
  // and then when shouldComponentUpdate returns true
  render() { }

  // 03: Invoked third when process is done
  componentDidMount() { }

  // 04: Invoked on any change. returns a boolean
  shouldComponentUpdate(nextProps, nextState) {  }

  // 05: Invoked from now on after each render
  // if shouldComponentUpdate returned true
  componentDidUpdate() { }

  // 05: Invoked only when component is unmounted 
  componentWillUnmount()
}

/** SLIDE #40 **/
/**************************** */

increaesValue = () => {
  this.state.counterValue += 1;
  this.forceUpdate();
}