/* src/App.js */
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import './App.css';

const initialState = { name: '', description: '' }


const App = () =>{

  //Initialize state with name'' desc''
  //form state takes in name and description
  const [formState, setFormState] = useState(initialState);
  //Make a new state specifically for todos and how to set it to an empty array.
  const [todos, setTodos] = useState([]);

  //UseEffect is a hook
  //useEffect - When the component loads, the useEffect hook is called and it invokes the fetchTodos function.
  // Use this hook for data fetching, subscriptions, or manually changing the DOM from React components before
  //fetchTODOS is hard called!
  useEffect(() => {
    //fetchTodos - Uses the Amplify API category to call 
    //the AppSync GraphQL API with the listTodos query. Once the data is returned, 
    //the items array is passed in to the setTodos function to update the local state.
    fetchTodos() 
  }, [])

  //SetInput gets the key and input value and sets the state of formState
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  //When the component first renders, 
  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  //Add to the todo list.
  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name} 
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;
