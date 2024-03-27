import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {
        todoItems.map((item, i) => (
          <TodoItem key={i} todoDate={item.date} todoName={item.task} />
        ))
      }
    </>
  )
}

export default TodoItems