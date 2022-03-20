// **********  slide #5 **************/

// JSX Code to create an element
// of type button
<button id='submitBtn'
    className='primary'
    onClick={handleClickFn} />

// The translated JS code.
// The second argument is the "props" object
createElement('button', {
    id: 'submit',
    className: 'primary',
    onClick: handleClickFn
}, null);

// **********  slide #7 **************/

// JSX
<Card title="Dialog hedaer"
    body="Do you confirm?"
    onConfirm={handleConfirmFn}
    onCancel={handleCancelFn} />

// Component code      
function Dialog(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button onClick={props.handleConfirmFn}>agree</button>
            <button onClick={props.handleCancelFn}>cancel</button>
        </div>
    )
}

// **********  slide #8 **************/

// JSX
<Card title="Dialog hedaer"
    body="Do you confirm?"
    onConfirm={handleConfirmFn}
    onCancel={handleCancelFn} />

// Component code      
function Dialog({ title, body, handleConfirmFn, handleCancelFn }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handleConfirmFn}>agree</button>
            <button onClick={handleCancelFn}>cancel</button>
        </div>
    )
}

// **********  slide #9 **************/

// JSX
<Card title="Dialog hedaer"
    body="Do you confirm?"
    onConfirm={handleConfirmFn}
    onCancel={handleCancelFn} />

// Component code      
class Dialog extends React.Component() {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <button onClick={this.props.handleConfirmFn}>agree</button>
                <button onClick={this.props.handleCancelFn}>cancel</button>
            </div>
        )
    }
}

// **********  slide #11 **************/

function UserInfo() {
    const user = {
        name: 'Jack Robinson',
        email: 'jack@gmail.com',
        address: {
            city: 'New York',
            street: '42st',
            zip: 21134567
        },
        phoneNumbers: ['+1235674432', '+166715643']
    }

    return (
        <div>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <Address {...user.adress} />
            <PhoneNumbers numbers={user.phoneNumbers} />
        </div>
    )
}

function Address({ city, street, zip }) {
    return (
        <ul>
            <li>city: {city}</li>
            <li>street: {city}</li>
            <li>zip: {city}</li>
        </ul>
    )
}

function PhoneNumbers({ numbers }) {
    return (
        <>
            <p>PhoneNumbers</p>
            <ul>
                {numbers.map(phoneNumber => (
                    <li>{phoneNumber}</li>
                ))}
            </ul>
        </>
    )
}

// **********  slide #12 **************/

function Parent() {
    const callbackFn = () => {
        // some opertaion in parent component  
    }

    return (
        <Child onAction={callbackFn} />
    )

}

// a function passed from parent component
function Child({ onAction }) {
    return (
        // the onAction callback is triggered by the button
        <button onClick={onAction}>operate on parent</button>
    )
}

// **********  slide #16 **************/

// Pure functions
function sum(a, b) {
    return a + b;
}

function RemoveElement(elements, elementId) {
    return elements.filter(element =>
        element.id === elementId
    );
}

function updateUserName(user, userName) {
    return { ...user, userName };
}

// **********  slide #17 **************/

// Impure functions
function withdraw(account, amount) {
    account.total -= amount;
}

function RemoveElement(elements, elementId) {
    const index = elements.findIndex(element =>
        element.id === elementId
    );
    delete elements[index];
}

function updateUserName(user, userName) {
    user.userName = userName;
}

// **********  slide #19 **************/

// Pure Component
function UserInfo({ user }) {
    const fullName = `${user.firstName} ${user.lastName}`;

    return <div>{fullName}</div>;
}

// **********  slide #21 **************/


function UserInfo(props) {
    // won't work 
    props.user = { name: 'other' };

    return (
        <div>{props.user.name}</div>
    )
}

// **********  slide #22 **************/

function UserInfo({ user }) {
    // Works!
    user = { name: 'other' };

    return (
        <div>{user.name}</div>
    )
}

// **********  slide #23 **************/

const readOnlyUser = Object.freeze({ name: 'John' })

Object.isFrozen(readOnlyUser); // --> true

readOnlyUser.name = 'Paul'; // --> Error

// **********  slide #25 **************/

// JSX
<Panel> /* children goes here! */  </Panel>

// **********  slide #27 **************/

function App() {
    return (
        <Panel>
            <h2>These elements are avilable as children</h2>
            <p>
                We can pass any element here.
                Build-in elements and custom components.
            </p>
        </Panel>
    )
}

function Panel(props) {
    return (
        <div>
            <h1>Children will be rendered below:</h1>
            {props.children}
        </div>
    )
}


// **********  slide #28 **************/

function Dialog({ showCancel }) {
    return (
        <div>
            {showCancel && <button>cancel</button>}
        </div>
    )
}

// **********  slide #29 **************/

function App() {
    return (
        <Panel>
            <h2>These elements are avilable as children</h2>
            <p>We can pass any element here</p>
        </Panel>
    )
}

function Panel(props) {
    Array.isArray(props.children); // --> True

    return (
        <div>
            <h1>Children will be rendered below:</h1>
            {props.children}
        </div>
    )
}

// **********  slide #30 **************/

function Table({ children }) {

    React.Children.count(children) // --> return length
    React.Children.only() // --> return true if single child

    // operate on one or more children
    React.Children.forEach(children, (child) => { });
    React.Children.map(children, (child) => { });

}

// **********  slide #33 **************/

function App() {
    return (
      <Modal okButton={Button}
             cancelButton={Button} >
        <p>Modal content</p>
      </Modal>
    )
  }
  
  function Button({ label, clickHandler }) {
    return <button onClick={clickHandler}>{label}</button>
  }
  
  function Modal({ okButton, cancelButton, children }) {
    const handleOk = () => { };
    const handleCancel = () => { };
  
    const Ok = okButton;
    const Cancel = cancelButton;
  
    return (
      <div className="modal">
        {children}
        <Ok label="ok" clickHandler={handleOk} />
        <Cancel label="cancel" clickHandler={handleCancel} />
      </div>
    )
  }
  