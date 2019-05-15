import React from 'react'

const TodoForm = ({ addTodo }) => {
  // Input tracker
  let input

  return (
    <div className='formContainer'>
      <input
        ref={node => {
          input = node
        }}
      />
      <button
        onClick={() => {
          addTodo(input.value)
          input.value = ''
        }}
      >
        +
      </button>
    </div>
  )
}

export default TodoForm
