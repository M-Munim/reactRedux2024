import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import './App.css'
import { useState } from 'react'
import WelcomeMsg from './Components/WelcomeMsg'

function App() {
  let initialTodos = [
    // {
    //   task: "code",
    //   date: "12/23/3434"
    // },
    // {
    //   task: "eat",
    //   date: "12/23/3434"
    // },
    // {
    //   task: "sleep",
    //   date: "12/23/3434"
    // },
  ];

  const [todoItems, setTodoItems] = useState(initialTodos);

  const handleNewItem = (itemName, ItemDueDate) => {
    // console.log(`New Item Added : ${itemName} Date${ItemDueDate}`);
    const newItem = [
      ...todoItems, {
        task: itemName,
        date: ItemDueDate
      },
    ];
    setTodoItems(newItem);
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
