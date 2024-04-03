import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { todoItemsContext } from './store/todo-items-store'

const TodoItems = () => {
  const { todoItems } = useContext(todoItemsContext);

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