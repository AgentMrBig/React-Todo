import React from 'react'
import Todo from '../TodoComponents/Todo'

const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map(todo => {
    // @ts-ignore
    return <Todo todo={todo} key={todo.id} remove={remove} />
  })
  return <ul>{todoNode}</ul>
}
export default TodoList
