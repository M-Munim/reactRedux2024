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
      e.target.value = ""
      let newArray = [...foodItems, foodItem]
      setfoodItems(newArray)
    }
  }

  return (
    <>
      <Container >
        <FoodInput handleOnChange={onKeyDown} />
        <ErrorMsg errItems={foodItems} para={"Error hy bhai"} />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container asdf={"asdfghjkl"}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem sint cupiditate laboriosam soluta vero, sunt mollitia est debitis sequi culpa totam ut odio delectus excepturi, officia ratione illo impedit!</p>
      </Container> */}
    </>
  )
}

export default App
