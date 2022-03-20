/** SLIDE #13 **/ 
/**************************** */
< div >
    <h1 id="title">Hello React</h1>
    <input placeholder="Type here..." />
    <button type="button">click</button>
    <ul className="list">
        <li>Item #1</li>
        <li>Item #2</li>
    </ul>
</div >

React.createElement('div', {},
    React.createElement('h1', { id: 'title' }, 'Hello React'),
    React.createElement('input', { placeholder: 'Type here..' }, null),
    React.createElement('button', { type: 'button' }, 'click'),
    React.createElement('ul', { className: 'list' }, [
        React.createElement('li', { key: 1 }, 'Item #1'),
        React.createElement('li', { key: 2 }, 'Item #2'),
    ])
)

/** SLIDE #16 **/ 
/**************************** */

const element = (
  <div>
      {console.log('execute within JSX')}
  </div>
);

/** SLIDE #17 **/ 
/**************************** */

const flag = true | false;

const element = (
    <div>
        {flag && <p>shows if true</p>}
        {flag ? <p>shows if true</p> : (
            <p>show if false</p>
        )}
    </div>
)


/** SLIDE #18 **/ 
/**************************** */

const colors = [
  {id: 1, name: 'red'}, 
  {id: 2, name: 'green'}, 
  {id: 3, name: 'blue'}, 
  {id: 4, name: 'pink'}
];

const list = (
  <ul>
      {colors.map((color) => (
       <li key={color.id}>{color.name}</li>
      ))}
  </ul>
);