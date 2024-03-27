import React from 'react'
import css from './FoodInput.module.css'
const FoodInput = () => {
  const handleTargetVal = (e) => {
    console.log(e.target.value)
  }

  return (
    <input type="text" name="" placeholder='Enter Food Item Here' id="" className={css.inputBox} onChange={handleTargetVal
    } />
  )
}

export default FoodInput