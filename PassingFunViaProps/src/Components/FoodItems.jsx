import React from 'react'
import Item from './Item'

const FoodItems = ({ items }) => {
  // let foodItems = ["Mango", "banana", "orange", "apple"]

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} handlebuy={() => console.log(`${item} Bought`)} />
      ))}
    </ul>
  )
}

export default FoodItems