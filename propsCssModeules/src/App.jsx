import ErrorMsg from "./Components/ErrorMsg"
import FoodItems from "./Components/FoodItems"

function App() {
  // let foodItems = []
  let foodItems = ["Mango", "banana", "orange", "apple", "cake"]

  return (
    <>
      <h1>Hello</h1>
      <ErrorMsg errItems={foodItems} para={"Error hy bhai"} />
      <FoodItems items={foodItems} />
    </>
  )
}

export default App
