import React, { useContext, useRef } from 'react'
import { todoItemsContext } from './store/todo-items-store';


const AddTodo = () => {
  const { addNewItem } = useContext(todoItemsContext);
  const todoNameElem = useRef();
  const todoDateElem = useRef();


  const handleAddButton = (e) => {
    e.preventDefault();
    const todoName = todoNameElem.current.value;
    const dueDate = todoDateElem.current.value;
    todoDateElem.current.value = ""
    todoNameElem.current.value = ""
    addNewItem(todoName, dueDate);
  }
  return (
    <div className="container">
      <form className="row genRow" onSubmit={handleAddButton}>
        <div className="col-6">
          <input type="text" placeholder='Enter ToDo Here' ref={todoNameElem} />
        </div>
        <div className="col-4">
          <input type="date" id="" ref={todoDateElem} />
        </div>
        <div className="col-2">
          <button className="btn btn-success genBtn">ADD</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo