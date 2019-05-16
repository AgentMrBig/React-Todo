import React from 'react'
import './Todo.css'

const TodoForm = props => {
  return (
    <div className='formContainer'>
      <input
        onChange={props.changeTodo}
        type='text'
        placeholder='Need to do something?'
        value={props.value}
      />
      <button onClick={props.addTodo}>+</button>
      <button onClick={props.removeTodos}>-</button>
    </div>
  )
}

export default TodoForm
