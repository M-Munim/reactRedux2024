import React, { useContext } from 'react'
import { todoItemsContext } from './store/todo-items-store';

const TodoItem = ({ todoDate, todoName, onDeleteClick }) => {
  const { deleteItem } = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row genRow">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button className="btn btn-danger genBtn" onClick={() => deleteItem(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem