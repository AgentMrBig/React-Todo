import React from 'react'
import TodoForm from './/components/TodoComponents/TodoForm'
import TodoList from './/components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    // Pass props to parent class
    super(props)
    // Set initial state
    this.state = {
      todos: [],
      todo: '',
      todoCount: 0
    }
  }

  // Add Todo handler
  addTodo = e => {
    e.preventDefault()
    // create item with unique id
    const newTodo = {
      // value: this.state.newItem.slice()
      task: this.state.todo,
      completed: false,
      id: Date.now()
    }

    // update state with new list and reset newItem input
    this.setState({
      todos: [...this.state.todos, newTodo],
      newItem: '',
      todoCount: this.state.todos.length
    })

    console.log(this.state.todos)
  }

  // change todo
  changeTodo = e => {
    this.setState({ todo: e.target.value })
    console.log(`changeTodo: e.target.name:${e.target.name}
      e.target.value:${e.target.value}
    `)
  }

  // toggleComplete
  toggleComplete = id => {
    let todos = this.state.todos.slice()
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return todo
      } else {
        return todo
      }
    })
    this.setState({ todos })
  }
  // remove todo handler
  removeTodos (e) {
    e.preventDefault()
    let todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos })
  }

  render () {
    return (
      <div>
        <h2>Welcome to your Todo App! Todo's: {this.state.todoCount}</h2>

        <TodoForm
          value={this.state.todo}
          changeTodo={this.changeTodo}
          addTodo={this.addTodo}
          removeTodos={this.removeTodos}
        />

        <TodoList
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default App
