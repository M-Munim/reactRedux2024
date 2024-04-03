import AddTodo from './Components/AddTodo'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import './App.css'
import { useState, useReducer } from 'react'
import WelcomeMsg from './Components/WelcomeMsg'
import { todoItemsContext } from './Components/store/todo-items-store'

const todoItemsReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        task: action.payload.itemName,
        date: action.payload.itemDueDate
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.task !== action.payload.itemName);
  }

  return newTodoItems;
};


function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      }
    };

    dispatchTodoItems(deleteItemAction);
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
