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

  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }
  return (
    <div className="container">
      <div className="row genRow">
        <div className="col-6">
          <input type="text" placeholder='Enter ToDo Here' onChange={handleNameChange} value={todoName} />
        </div>
        <div className="col-4">
          <input type="date" id="" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success genBtn" onClick={handleAddButton}>ADD</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo