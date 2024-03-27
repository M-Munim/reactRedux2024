import React from 'react'
import css from "./Item.module.css"

// const Item = ({ foodItem }) => { //destructering
const Item = (props) => {
  return (
    <>
      <li className='list-group-item'>
        {/* {foodItem} */}
        {props.foodItem}
      </li>
    </>
  )
}

export default Item