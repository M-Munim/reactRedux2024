import React from 'react'

const Todo3 = () => {
  let task = "cook";
  let date = "12/03/23"
  return (
    <div className="container">
      <div className="row genRow">
        <div className="col-6">
          {task}
        </div>
        <div className="col-4">
          {date}
        </div>
        <div className="col-2">
          <button className="btn btn-danger genBtn">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo3