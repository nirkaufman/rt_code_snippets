/**** SLIDE #9 */

getBy...

queryBy...

findBy...

// multiply elements

getAllBy...

queryAllBy...

findAllBy...



/**** SLIDE #10 */
import { render, screen } from '@testing-library/react'

test('should show login form', () => {
  render(<Login />)

  const input = screen.getByLabelText('Username')
})

/**** SLIDE #12 */
import { render, screen } from '@testing-library/react'

// component to test
function Component() {
  return <div data-testid="container" />
}

// test file
test('render correct counter value ', () => {
  render(<MyComponent />)
  const element = screen.getByTestId('custom-element');
})

/*** SLIDE #14 */

fireEvent[eventName](node: HTMLElement, eventProperties: Object);
fireEvent(node: HTMLElement, event: Event);

/*** SLIDE #15 */

beforeAll(() => setupGlobalVariables());
beforeEach( () => initWithRandomData());

afterEach(() => restAll())
afterAll(() => cleanup())

test('logic block', () => {})
test('logic block', () => {})
test('logic block', () => {})
test('logic block', () => {})

/*** SLIDE #16 */


fireEvent.click(button);

fireEvent.keyDown(input, {
  key: 'Enter',
  code: 'Enter',
  charCode: 13
})

fireEvent.drop(dropZoneDiv, {
  dataTransfer: {
    files: [
      new File(['OOOXXX'],
        'picture.png',
        { type: 'image/png' })
    ],
  },
})

test('render user name ', async () => {
  const button = screen.getByRole('button', { name: 'get user name' });

  fireEvent.click(button);
  const userName = await screen.findByText('Jhon lennon');
})


test('render success message after submit ', () => {
  // SETUP
  const component = render(<Form />);
  const button = component.getByTestId('submit-btn');
  const message = component.getByTestId('message');

  // ACTION
  fireEvent.click(button);

  // ASSERT
  expect(message.textContent).toBe('submit success');
});


import { render, fireEvent, screen } from '@testing-library/react'

test('loads items', async () => {
  render(<List />);

  fireEvent.click(screen.getByText('load items'));

  const items = await screen.findAllByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)
})

await waitFor(() =>
  screen.getByRole('heading'),
)


expect(screen.getByRole('button')).not.toBeDisabled();

/** SLIDE 31 */

export function FetchTask() {
  const [task, setTask] = useState(false)

  const loadFirstTask = () => {
    fetch('/api/todos/1')
      .then(response => response.json())
      .then(task => setTask(task))
  }

  return (
    <div>
      <button data-testid="fetch-button"
        onClick={loadFirstTask}>load</button>
      {task && (
        <h3 data-testid="task-title">{task.title}</h3>
      )}
    </div>
  )
}

/** SLIDE 31 */
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
  rest.get('/api/todos/1', (req, res, ctx) => {
    return res(ctx.json({title: 'First Task'}));
  }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/** SLIDE 32 */


/** SLIDE 33 */

