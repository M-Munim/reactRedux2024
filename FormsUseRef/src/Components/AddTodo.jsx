import React, { useRef, useState } from 'react'

const AddTodo = ({ onNewItem }) => {
  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate] = useState('');
  const todoNameElem = useRef();
  const todoDateElem = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // }

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of updates are ${noOfUpdates.current}`);
  // }

  const handleAddButton = (e) => {
    e.preventDefault();
    const todoName = todoNameElem.current.value;
    const dueDate = todoDateElem.current.value;
    todoDateElem.current.value = ""
    todoNameElem.current.value = ""
    onNewItem(todoName, dueDate);
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