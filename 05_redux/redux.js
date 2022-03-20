//********** SLIDE #11 */ 

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener);
  }

  const getState = () => state;

  return { dispatch, subscribe, getState };
}

const store = createStore((state, action) => {
  if (action === 'inc') {
    return { ...state, count: state.count + 1 }
  }
}, { count: 1 });

store.subscribe(() => console.log(store.getState()));
store.dispatch('inc');
store.dispatch('inc');
store.dispatch('inc');


//********** SLIDE #12 */ 

const TasksAppState = {
  users: [],
  tasks: [],
  currentLoggedInUser: {},
  isLoading: false,
  allTasksCompleted: false,
  lastActivityDate: ''
}

import { createStore } from 'redux';

createStore(tasksReducer, TasksAppState);

//********** SLIDE #15 */ 

const addTask = {
  type: 'addTask',
  user: { id: 356776, userName: 'John' },
  title: 'new task',
  content: 'learn how to use redux!'
}

//********** SLIDE #16 */ 

const addTask = {
  type: 'addTask',
  payload: {
    title: 'new task',
    content: 'learn how to use redux!'
  },
  metaData: {
    user: {
      id: 356776,
      userName: 'John'
    },
    createdAt: '02/11/2022',
    loggable: true
  }
}

//********** SLIDE #16 */ 

function createAddTask(title, content) {
  return {
    type: 'addTask',
    payload: { title, content },
    metaData: {
      user: auth.getCurrentUser(),
      createdAt: new Date(),
    }
  }
}

//********** SLIDE #17 */ 

export function createTask(title, content) { }

export function updateTask(taskId, title, content) { }

export function deleteTask(taskId) { }

export function hideTask(taskId) { }

//********** SLIDE #20 */ 

function taskReducer(state, action) {
  switch (action.type) {

    case 'addTask':
      return {
        ...state, tasks: [
          ...state.tasks,
          action.payload
        ]
      }

    case 'removeTask':
      return {
        ...state,
        tasks: state.tasks.filter(
          task => task.id !== action.payload
        )
      }

    default:
      return state;
  }
}

//********** SLIDE #21 */ 

function addTask(title, content) {
  return {
    type: 'addTask',
    payload: { title, content }
  }
}

const addTaskAction = {
  type: 'addTask',
  payload: {
    title: 'new task',
    content: 'learn redux'
  }
}

function taskReducer(state, action) {
  switch (action.type) {

    case 'addTask':
      return {
        ...state, tasks: [
          ...state.tasks,
          action.payload
        ]
      }
  }
}

const resultState = {
  tasks: [{
    title: 'new task',
    content: 'learn redux'
  }]
}

//********** SLIDE #22 */ 

function usersReducer(state, action) {... }

function tasksReducer(state, action) {... }

function currenUserReducer(state, action) {... }

//********** SLIDE #23 */ 

import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  currentLoggedInUser: currenUserReducer
});

const store = createStore(rootReducer, initialState);

//********** SLIDE #27 */ 

function selectTasks(state) {
  return state.tasks;
}

function selectTasksByCurrentUser(state) {
  return state.task.filter(task => (
    task.creator.id === state.currentLoggedInUser.id
  ))
}

//********** SLIDE #28 */ 

function selectTaskById(taskId) {
  return state.tasks.find(task => task.id === taskId);
}

//********** SLIDE #29 */ 

function getTaskWithUserDetails(state) {
  const task = selectTasksByCurrentUser(state);
  const user = state.currentLoggedInUser;

  return { ...task, user };
}

//********** SLIDE #33 */ 

import store from './store'
import { Provider } from 'react-redux'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//********** SLIDE #34 */ 
import { useDispatch } from 'react-redux'

function newTaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (title, content) => {
    useDispatch(addTask(title, content));
  }

  return (...)
}


//********** SLIDE #35 */ 
import { useSelector } from 'react-redux'

function Tasks() {
  const tasks = useSelector(state => state.tasks);

  return (
    <ul>
      {tasks.map(task => <li>task.title</li>)}
    </ul>
  )
}

//********** SLIDE #36 */ 
import { useSelector } from 'react-redux'

function Tasks() {
  const tasks = useSelector(selectTasksByCurrentUser);

  return (
    <ul>
      {tasks.map(task => <li>task.title</li>)}
    </ul>
  )
}

//********** SLIDE #38 */ 

function Tasks() {
  const tasks = useSelector(selectTasks);

  return (
    <ul>
      {tasks.map(task => <li>task.title</li>)}
    </ul>
  )
}


//********** SLIDE #42 */ 

function middleware(store) {
  return function (next) {
    return function (action) {
      // get refernce to the state
      store.getState();

      // dispatch new action
      store.dispatch(...);

      // dispatch new action
      store.dispatch(...);

      // call the next middleware with 
      // the passed action
      next(action);
    }
  }
}

//********** SLIDE #43 */ 

function api(store) {
  return (next) => (action) => {
    if (action.type === 'addTask') {
      const request = fetch('api/task', {
        method: 'POST',
        body: JSON.stringify(action.payload)
      });

      request.then(() => next({
        type: 'actionAdded',
        payload: task
      }));
    } else {
      next(action);
    }
  }
}

//********** SLIDE #44 */ 
import { applyMiddleware } from 'redux'

const store = createStore(reducer, initialState, applyMiddleware(api));




