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
      todoCount: 0,
      message: '0'
    }
  }

  // custom fades

  fadeIn = element => {
    var fade_in_from = 0
    var fade_out_from = 10
    var target = document.getElementById(element)
    target.style.display = 'block'
    var newSetting = fade_in_from / 10
    target.style.opacity = newSetting
    fade_in_from++
    if (fade_in_from == 10) {
      target.style.opacity = 1
      clearTimeout(loopTimer)
      fade_in_from = 0
      return false
    }
    var loopTimer = setTimeout(this.fadeIn(element), 50)
  }

  fadeOut = element => {
    var fade_in_from = 0
    var fade_out_from = 10
    var target = document.getElementById(element)
    target.style.display = 'block'
    var newSetting = fade_out_from / 10
    target.style.opacity = newSetting
    fade_out_from++
    if (fade_out_from == 0) {
      target.style.opacity = 1
      clearTimeout(loopTimer)
      fade_out_from = 10
      return false
    }
    var loopTimer = setTimeout(this.fadeOut(element), 50)
  }

  // Add Todo handler
  addTodo = e => {
    e.preventDefault()
    // create item with unique id
    var newTodo = {
      // value: this.state.newItem.slice()
      task: this.state.todo,
      completed: false,
      id: Date.now()
    }

    if (this.state.todo === '') {
      this.setState({
        message: `You can't do nothing, type a task before trying to add it to the list!`
      })
      document.getElementById('msg').className = 'eMsg'
      setTimeout(() => {
        this.setState({
          message: this.state.todoCount,
          todos: this.state.todos
        })
        document.getElementById('msg').className = ''
      }, 1000)
    } else if (this.state.todo != '') {
      // update state with new list and reset todo input
      this.setState({
        todos: [...this.state.todos, newTodo],
        todo: '',
        todoCount: this.state.todos.length,
        message: this.state.todoCount
      })
    }

    console.log(this.state.todos)
  }

  // change todo
  changeTodo = e => {
    this.setState({ todo: e.target.value })
    console.log(`e.target.value:${e.target.value}`)
    console.log(this.state.todo)
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
    console.log(this.state.todos)
  }
  // remove todo handler
  removeTodos = e => {
    e.preventDefault()
    console.log(this.state.todos)
    let doneTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({ todos: doneTodos })
  }

  render () {
    return (
      <div className='mainPanel gradGrey'>
        <h2 id='msg' className=''>
          Welcome to your Todo App! Todo's:{' '}
          <span id='msgSpan'>{this.state.message}</span>
        </h2>
        <TodoForm
          value={this.state.todo}
          changeTodo={this.changeTodo}
          addTodo={this.addTodo}
          removeTodos={this.removeTodos}
        />
        <hr />
        <button className='delBtn' onClick={this.removeTodos}>
          Clear Completed Todo's
        </button>
        <TodoList
          toggleComplete={this.toggleComplete}
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default App
