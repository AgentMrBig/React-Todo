import React from 'react'
import './Todo.css'

const TodoForm = props => {
  return (
    <div className='inputSyles'>
      <input
        onChange={props.changeTodo}
        type='text'
        placeholder='Need to do something?'
        value={props.value}
      />
      <button className='addBtn' onClick={props.addTodo}>
        +
      </button>
    </div>
  )
}

export default TodoForm
