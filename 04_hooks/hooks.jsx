import { useEffect, useReducer, useRef, useState } from "react";

//****** slide #5 */
function List() {
    const items = [];

    const addItem = (event) => {
        if (event.code === 'Enter') {
            items.push(event.target, value);
        }
    }

    return (
        <div>
            <input onKeyDown={addItem} />
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

//****** slide #6 */


function ReactFunctionComponent() {

    // Must run inside component 
    hookFunction();

    return <div>return react element</div>;
}

//****** slide #9 */

const [value, setValue] = useState(initialValue);

//****** slide #11 */

function Counter() {
    const [value, setValue] = useState(0);

    const increaes = () => {
        setValue(value + 1);
    }

    return (
        <div>
            <p>value is: {value}</p>
            <button onClick={increase}>+</button>
        </div>
    )

}

//****** slide #12 */

function Counter() {
    const [value, setValue] = useState(0);

    const increaes = () => {
        setValue(currentValue => currentValue + 1);
    }

    return (
        <div>
            <p>value is: {value}</p>
            <button onClick={increase}>+</button>
        </div>
    )
}


//****** slide #13 */

function Counter() {
    const [title, setTitle] = useState('counter');
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    return (...)
}

//******* slide #13 */

function App() {
    const [counter, setCounter] = useState({
        value: 0,
        steps: 1,
    });

    const increase = () => {
        setCounter({
            ...counter,
            value: counter.value + counter.steps
        });
    }

    return (
        <div>
            <h2>{counter.value}</h2>
            <button onClick={increase}>+</button>
        </div>
    )
}

//******* slide #16 */

const [state, dispatch] = useReducer(reducer, initialState);

//******* slide #17 */

const initialCounter = { value: 0 };

function counterUpdater(state, action) {
    switch (action.type) {
        case 'increase':
            return { value: state.value + 1 };
        case 'decrease':
            return { value: state.value - 1 };
        default:
            throw new Error('Action not supported');
    }
}

function Counter() {
    const [counter, dispatch] = useReducer(counterUpdater, initialCounter);
    return (
        <div>
            Count: {counter.value}
            <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
            <button onClick={() => dispatch({ type: 'increase' })}>+</button>
        </div>
    );
}

//******* slide #20 */

const ref = useRef(null);

{ current: null }

//******* slide #21 */

function Counter() {
    const limit = useRef(5);
    const [count, setCount] = useState(0);

    const increase = () => {
        if (count < limit.current) {
            setCount(count + 1);
        } else {
            alert('You reached the limit');
        }
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
        </div>
    )
}
}

//******* slide #22 */

function Button() {
    const clickCounter = useRef(0);
    const [disable, setDisable] = useState(false);

    const clickHandler = () => {
        clickCounter.current += 1;

        if (clickCounter.current === 3) {
            setDisable(true);
        }
    }

    return (
        <div>
            <button disabled={disable}
                onClick={clickHandler}>click</button>
        </div>
    )
}

//******* slide #22 */

function Input() {
    const inputRef = useRef(null);

    const convertToNumber = () => {
        inputRef.current.type = 'number';
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={convertToNumber}>click</button>
        </div>
    )
}


//******* slide #26 */


function App() {
    const userInfo = {
        Name: 'John Barber',
        address: {
            city: 'London',
            street: 'Naswhille',
            number: 53,
            zip: 5677653
        }
    }

    return (
        <>
            <Page user={userInfo} />
        </>
    );
}

function Page({ user }) {
    return (
        <div>
            <h1>Details for {user.name}</h1>
            <Grid user={user} />
        </div>
    )
}

function Grid({ user }) {
    return (
        <div className='grid'>
            <Card user={user} />
        </div>
    )
}

function Card({ user }) {
    return (
        <>
            <p>Address:</p>
            <ul>
                <li>{user.address.city}</li>
                <li>{user.address.street}</li>
                <li>{user.address.number}</li>
                <li>{user.address.zip}</li>
            </ul>
        </>
    )
}

//******* slide #26 */

const UserContext = React.createContext();

function App() {
    const userInfo = {
        Name: 'John Barber',
        address: {
            city: 'London',
            street: 'Naswhille',
            number: 53,
            zip: 5677653
        }
    }

    return (
        <UserContext.Provider value={userInfo}>
            <Page />
        </UserContext.Provider>
    );
}

function Page() {
    const { name } = useContext(UserContext);

    return (
        <div>
            <h1>Details for {name}</h1>
            <Grid />
        </div>
    )
}

function Grid() {
    return (
        <div className='grid'>
            <Card />
        </div>
    )
}

function Card() {
    const { address } = useContext(UserContext);

    return (
        <>
            <p>Address:</p>
            <ul>
                <li>{address.city}</li>
                <li>{address.street}</li>
                <li>{address.number}</li>
                <li>{address.zip}</li>
            </ul>
        </>
    )
}


//******* slide #33 */

useEffect(callbackFn, depsArray);


//******* slide #34 */
function List() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const result = fetchAllItemsFromAPI();
        setItems(result);
    }, [])

    return (
        <ul>
            {items.map(item => <li>{item.lable}</li>)}
        </ul>
    )
}

//******* slide #35 */

class List extends React.Component {
    componentDidMount() {
        // will execute only once
    }
}

function List() {
    useEffect(() => {
        // will execute only once
    }, [])
}

//******* slide #36 */
function List() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('items length cahnged!');
    }, [items.length])

    const addItem = () => {
        setItems([...items, 'new item']);
    };

    return (
        <ul>
            <button onClick={addItem}>add item</button>
            {items.map(item => <li>{item.lable}</li>)}
        </ul>
    )
}

//******* slide #37 */

class List extends React.Component {
    state = { items: [] };

    shouldComponentUpdate(newProps, newState) {
        return this.state.items.length !== newState.items.length;
    }

    componentDidUpdate() {
        console.log('items length cahnged!');
    }

    addItem = () => {
        this.setState({
            items: [...this.state.items, 'new item']
        });
    };

    render() {
        return (
            <ul>
                <button onClick={this.addItem}>add item</button>
                {this.state.items.map(item => <li>{item.lable}</li>)}
            </ul>
        )
    }
}

//******* slide #38 */ 

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const clock = setInterval(() => {
            setCount((count) => count + 1);
        }, 2000);

        return () => clearInterval(clock);
    }, []);

    return <h2>{count}</h2>
}


//******* slide #40 */ 

function Component() {
    const [value, setValue] = useState();

    // componentDidMount
    useEffect(() => {
        console.log('execute once');
    }, [])

    // componentShoulUpdate + componentDidUpdate
    useEffect(() => {
        console.log('execute each time state change');
    }, [value])

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('execute on unmount');
        }
    }, [value])
}

//******* slide #44 */ 

function simpleMemoize(fn) {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args);

        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }

        return cache.get(key);
    }
}

function sum(a, b) {
    console.log('sum execute');
    return a + b;
}

const memoSum = simpleMemoize(sum);

memoSum(3, 3);
memoSum(3, 3);

//****** */

const memoizedCallback = useCallback(
    () => {
        handleValueChange(value);
    },
    [value],
);



useCallback(fn, deps) === useMemo(() => fn, deps);

/** */
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('api/users')
            .then(users => setUsers(users))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, []);

    return (
        <div>
            <h2>Users:</h2>
            {loading && <p>Loading...</p>}
            {error ? <p>{error.message}</p> : (
                <ul>
                    {users.map(user => <li>{user.name}</li>)}
                </ul>
            )}
        </div>
    );
}

/** SLIDE #40 */

function Component() {
    const [state, setState] = useState();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    // Run once
    useEffect(() => {...}, [])

    // Run when state change
    useEffect(() => {...}, [state])

    // Run when visible or loading change
    useEffect(() => {...}, [visible, loading])
}


/** SLIDE #25 **/ 
/**************************** */

import { useEffect, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue(currentValue => currentValue + 1);
    }, 1000);
  }, [])

  return { ...};
}