import css from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'

function App() {
  const [calVal, setCalVal] = useState("");

  const onBtnClick = (btnText) => {
    if (btnText === "c") {
      setCalVal("")
    } else if (btnText === "=") {
      const result = eval(calVal);
      setCalVal(result)
    } else {
      const newDisplay = calVal + btnText;
      setCalVal(newDisplay)
    }
  }
  return (
    <div className={css.calculator}>
      <Display DisplayVal={calVal} />
      <ButtonsContainer onBtnClicked={onBtnClick} />
    </div>
  )
}

export default App
