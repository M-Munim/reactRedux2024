import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import './App.css'
import { useState } from 'react'
import WelcomeMsg from './Components/WelcomeMsg'

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, ItemDueDate) => {
    // const newItem = [
    //   ...todoItems, {
    //     task: itemName,
    //     date: ItemDueDate
    //   },
    // ];
    // setTodoItems(newItem);
    setTodoItems((currVal) => [
      ...currVal,
      {
        task: itemName,
        date: ItemDueDate
      },
    ]);
  };

  const handleDeleteItem = (todoName) => {
    const deleteItem = todoItems.filter((item) => item.task !== todoName);
    setTodoItems(deleteItem);
  };

  return (
    <center className='container item-container'>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  )
}

export default App
