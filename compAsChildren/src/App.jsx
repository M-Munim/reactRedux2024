import ErrorMsg from "./Components/ErrorMsg"
import FoodItems from "./Components/FoodItems"
// import Container from "./Components/Container"

function App() {
  // let foodItems = []
  let foodItems = ["orange", "banana", "orange", "apple", "cake"]

  return (
    <>
      <Container >
        <h1>Hello</h1>
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
