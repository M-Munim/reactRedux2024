import React from 'react'
import css from './ErrorMsg.module.css'

const ErrorMsg = ({ errItems, para }) => {
  return (
    <>
      {errItems.length === 0 && <h3 className={css.err}>Nothing Healthy Available,,, {para}</h3 >}
    </>
  )
}

export default ErrorMsg