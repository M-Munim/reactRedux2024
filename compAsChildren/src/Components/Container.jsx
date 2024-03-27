import React from 'react'
import css from "./Container.module.css"

const Container = (props) => {
  return (
    <div className={css.container}>
      {props.children}
      <p>{props.asdf}</p>
    </div>

  )
};
export default Container