import ErrorMsg from "./Components/ErrorMsg"
import FoodItems from "./Components/FoodItems"
import Container from "./Components/Container"
import FoodInput from "./Components/FoodInput"

function App() {
  // let foodItems = []
  let foodItems = ["Mango", "banana", "orange", "apple", "cake"]

  let handleTargetVal = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <Container >
        <FoodInput handleTargetVal={handleTargetVal} />
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
