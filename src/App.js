import React from 'react'
import TodoForm from './/components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor (props) {
    // Pass props to parent class
    super(props)
    // Set initial state
    this.state = {
      data: []
    }
  }
  // Add Todo handler
  addTodo (val) {
    // Assemble data
    const todo = { text: val, id: window.id++ }
    // update data
    this.state.data.push(todo)
    // update state
    this.setState({ data: this.state.data })
  }
  // remove todo handler
  removeTodo (id) {
    // Filters all todos except the one to be removed
    const remainder = this.state.data.filter(todo => {
      if (todo.id !== id) return todo
    })
    // Update state with filter
    this.setState({ data: remainder })
  }

  render () {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo.bind(this)} />
      </div>
    )
  }
}

export default App
