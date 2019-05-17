import React from 'react'

const Todo = props => {
  // Each Todo
  return (
    <li
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </li>
  )
}

export default Todo
