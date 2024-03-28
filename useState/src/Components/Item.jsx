import React from 'react'
import css from "./Item.module.css"

const Item = ({ foodItem, handlebuy, bought }) => { //destructering

  return (
    <>
      <li className={`list-group-item  ${bought && 'active'} `}>
        {foodItem}
        {/* {props.foodItem} */}
        <button className={css.btn} onClick={
          handlebuy
        }> Buy</button>
      </li >
    </>
  )
}

export default Item