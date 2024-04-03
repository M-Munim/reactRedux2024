import React, { useContext } from 'react'
import css from './WelcomeMsg.module.css'
import { todoItemsContext } from './store/todo-items-store'

const WelcomeMsg = () => {
  const { todoItems } = useContext(todoItemsContext);

  return (
    todoItems.length === 0 && <div className={css.welcome}>Welcome Msg</div>
  )
}

export default WelcomeMsg