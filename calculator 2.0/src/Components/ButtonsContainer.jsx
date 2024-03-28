import React from 'react'
import css from './ButtonsContainer.module.css'

const ButtonsContainer = (prop) => {
  const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0', '.', '='];
  return (
    <div className={css.btnsContainer}>
      {buttons.map((button, index) =>
      (
        <button key={index} className={css.btn} onClick={() => prop.onBtnClicked(button)}>{button}</button>
      ))}
    </div >
  )
}

export default ButtonsContainer