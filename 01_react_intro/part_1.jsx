/** SLIDE #5 **/ 
/**************************** */
React.createElement('div', {},
    React.createElement('h1', { id: 'title' }, 'Hello React'),
    React.createElement('input', { placeholder: 'Type here..' }, null),
    React.createElement('button', { type: 'button' }, 'click'),
    React.createElement('ul', { className: 'list' }, [
        React.createElement('li', { key: 1 }, 'Item #1'),
        React.createElement('li', { key: 2 }, 'Item #2'),
    ])
)

/** SLIDE #6 **/ 
/**************************** */

// how createElement works (partial code)
function createElement(type, props, ...children) {
  // add children to props object
  props.children = children;

  // React adds extra properties such as: name, key, ref
  return { type, props, children };
}

// execution
createElement('h1', { id: 'title' }, 'hello react');

// output
{
  type: 'h1',
      props: {
      id: title,
          children: ['hello react']
  }
}

/** SLIDE #9 **/ 
/**************************** */

import React from 'react';

// Create a React Element.
React.createElement('h2', { id: 'title' }, 'Hello React');

// Output of the function above:
const reactElement = {
    type: 'h2',
    props: {
        id: 'title',
        children: 'Hello React'
    },
}

import ReactDOM from 'react-dom';

// ReactDOM (The renderer)
ReactDOM.render(reactElement);

// Result of the function above is a DOM element:
<h2 id="title">Hello react</h2>