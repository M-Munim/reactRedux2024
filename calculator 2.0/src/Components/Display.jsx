import React from 'react'
import css from './Display.module.css'

const Display = ({ DisplayVal }) => {
  return (
    <>
      <input type="text" name="" className={css.display} value={DisplayVal} readOnly/>
    </>
  )
}

export default Display