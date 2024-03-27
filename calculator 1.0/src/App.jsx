import css from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
function App() {

  return (
    <div className={css.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  )
}

export default App
