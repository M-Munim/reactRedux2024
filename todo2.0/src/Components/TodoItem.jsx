import React from 'react'

const TodoItem = ({ todoDate, todoName }) => {

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
          <button className="btn btn-danger genBtn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem