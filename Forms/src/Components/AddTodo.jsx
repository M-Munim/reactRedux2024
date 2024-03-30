import React, { useState } from 'react'

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButton = (e) => {
    onNewItem(todoName, dueDate);
    e.preventDefault();
    setTodoName("");
    setDueDate("");
  }
  return (
    <div className="container">
      <form className="row genRow" onSubmit={handleAddButton}>
        <div className="col-6">
          <input type="text" placeholder='Enter ToDo Here' onChange={handleNameChange} value={todoName} />
        </div>
        <div className="col-4">
          <input type="date" id="" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success genBtn">ADD</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo