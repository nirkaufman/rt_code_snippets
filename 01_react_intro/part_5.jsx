/** SLIDE #36 **/ 
/**************************** */

<section class="todoapp">

<header class="header">
    <h1>todos</h1>
    <input class="new-todo"
        placeholder="What needs to be done?"
        autofocus />
</header>

<section class="main">
    <input class="toggle-all"
        type="checkbox" />
        <ul class="todo-list">
            <li>
                <div class="view">
                    <input class="toggle"
                        type="checkbox" />
                        <label>Todo Title</label>
                        <button class="destroy"></button>
                </div>
                <input class="edit" />
            </li>
        </ul>
</section>

<footer class="footer">
    <span class="todo-count"><strong>0</strong> items left</span>
    <button class="clear-completed">Clear completed
    </button>
</footer>

</section>


/** SLIDE #37 **/ 
/**************************** */

function TodoApp() {
return (
    <section class="todoapp">
        <Header />
        <Main />
        <Footer />
    </section>
)
}

function Header() {
return (
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo"
            placeholder="What needs to be done?"
            autofocus />
    </header>
)
}

function Main() {
return (
    <section class="main">
        <input class="toggle-all"
            type="checkbox" />
        <List />
    </section>
)
}

function List() {
return (
    <ul class="todo-list">
        <li>
            <div class="view">
                <input class="toggle"
                    type="checkbox" />
                <label>Todo Title</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" />
        </li>
    </ul>
)
}

function Footer() {
<footer class="footer">
    <span class="todo-count"><strong>0</strong> items left</span>
    <button class="clear-completed">Clear completed
    </button>
</footer>
}

/** SLIDE #38 **/ 
/**************************** */

function TodoApp() {
const listName = 'todolist';

const items = [
    { id: 1, title: 'task #1', completed: false },
    { id: 2, title: 'task #2', completed: true },
    { id: 3, title: 'task #3', completed: false },
    { id: 4, title: 'task #4', completed: true },
]

return (
    <section class="todoapp">
        <Header title={listName} />
        <Main items={items} />
        <Footer count={items.length} />
    </section>
)
}

/** SLIDE #39 **/ 
/**************************** */

function List({ items }) {
return (
    <ul class="todo-list">
        {items.map(item => (
            <li key={item.id}>
                <div class="view">
                    <input class="toggle"
                           type="checkbox" />
                    <label>{item.title}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" />
            </li>
        ))}

    </ul>
)
}