import React from 'react'
import Todo from '../TodoComponents/Todo'

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo toggleComplete={props.toggleComplete} key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
export default TodoList
