
import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import Todo1 from './Components/Todo1'
import Todo2 from './Components/Todo2'
import Todo3 from './Components/Todo3'
import './App.css'

function App() {

  return (
    <center className='container item-container'>
      <AppName />
      <AddTodo />
      <Todo1 />
      <Todo2 />
      <Todo3 />
    </center>
  )
}

export default App
