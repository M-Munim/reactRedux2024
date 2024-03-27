import React from 'react'
import css from "./Item.module.css"

const Item = ({ foodItem }) => { //destructering
  // const Item = (props) => {
  const handlebuy = (e) => {
    console.log(e);
    // console.log(`Item ${props.foodItem} Bought`)
    console.log(`Item ${foodItem} Bought`)
  }
  return (
    <>
      <li className='list-group-item'>
        {foodItem}
        {/* {props.foodItem} */}
        <button className={css.btn} onClick={
          // () => handlebuy()
          (e) => handlebuy(e)
        }> Buy</button>
      </li >
    </>
  )
}

export default Item