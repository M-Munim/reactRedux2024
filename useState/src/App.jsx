import ErrorMsg from "./Components/ErrorMsg"
import FoodItems from "./Components/FoodItems"
import Container from "./Components/Container"
import FoodInput from "./Components/FoodInput"
import { useState } from "react";

function App() {
  const [foodItems, setfoodItems] = useState(["Mango", "orange", "apple"])



  let onKeyDown = (e) => {
    if (e.key === 'Enter') {
      let foodItem = e.target.value;
      e.target.value = "";
      let newArray = [...foodItems, foodItem]
      setfoodItems(newArray)
    }
  }

  return (
    <Container >
      <h1>Healthy Food</h1>
      <FoodInput handleOnChange={onKeyDown} />
      <ErrorMsg errItems={foodItems} para={"Error hy bhai"} />
      <FoodItems items={foodItems} />
    </Container>
  )
}

export default App
