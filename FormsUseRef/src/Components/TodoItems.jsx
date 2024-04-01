import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {
        todoItems.map((item, i) => (
          <TodoItem key={i} todoDate={item.date} todoName={item.task} onDeleteClick={onDeleteClick} />
        ))
      }
    </>
  )
}

export default TodoItems