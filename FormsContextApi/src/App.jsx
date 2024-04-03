import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import './App.css'
import { useState } from 'react'
import WelcomeMsg from './Components/WelcomeMsg'
import { todoItemsContext } from './Components/store/todo-items-store'

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, ItemDueDate) => {
    setTodoItems((currVal) => [
      ...currVal,
      {
        task: itemName,
        date: ItemDueDate
      },
    ]);
  };

  const deleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.task !== todoName);
    setTodoItems(newTodoItems);
  };

  return (
    <todoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className='container item-container'>
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </todoItemsContext.Provider>
  )
}

export default App
