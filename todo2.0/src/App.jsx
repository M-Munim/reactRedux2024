import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import './App.css'

function App() {
  let todoItems = [
    {
      task: "code",
      date: "12/23/3434"
    },
    {
      task: "eat",
      date: "12/23/3434"
    },
    {
      task: "sleep",
      date: "12/23/3434"
    }, {
      task: "repeat",
      date: "12/23/3434"
    }
    , {
      task: "repea",
      date: "12/23/3434"
    }
  ]

  return (
    <center className='container item-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  )
}

export default App
