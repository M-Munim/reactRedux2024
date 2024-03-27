import React from 'react'

const AddTodo = () => {
  return (
    <div className="container">
      <div className="row genRow">
        <div className="col-6">
          <input type="text" placeholder='Enter ToDo Here' />
        </div>
        <div className="col-4">
          <input type="date" id="" />
        </div>
        <div className="col-2">
          <button className="btn btn-success genBtn">ADD</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo