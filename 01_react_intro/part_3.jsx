/** SLIDE #20 **/ 
/**************************** */

function Title() {
  return <h1>Hello JSX</h1>;
}

/** SLIDE #21 **/ 
/**************************** */

class Title extends React.Component {
  render() {
      return <h1>Hello JSX</h1>
  }
}

/** SLIDE #23 **/ 
/**************************** */

// component code
function Title(props) {
  return <h1>{props.title}</h1>;
}

// passing component code  
React.createElement(Title, { title: 'Hello JSX' });

// using JSX
<Title title="Hello JSX" />


/** SLIDE #25 **/ 
/**************************** */

function Page() { }

function Header() { }

function Menu() { }

function MenuItem() { }

function Card() { }

function Footer() { }