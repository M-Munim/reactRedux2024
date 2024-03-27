function App() {
  // let Healthyitems = ["vegis", "oats", "meat", "milk", "dall", "ghee"]
  // let Healthyitems = []

  // if (Healthyitems.length === 0) {
  //   return <h2>Nothing Available</h2>
  // }


  // let abc = Healthyitems.length === 0 ? <h2>Nothing Available</h2> : null
  // let abc = Healthyitems.length === 0 && <h4>Nothing Available</h4>


  // let students = ["Kamran", "isa", "Mansor", "Amir", "salman"]
  let students = []

  // if (students.length === 0) {
  //   return <h2>No One Is Available</h2>
  // }

  let check = students.length === 0 ? <h2>No One Is Available</h2> : null;


  return (
    // NORMAL ********************************************
    // <div>
    //   <h1>Heading</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item active" aria-current="true">An active item</li>
    //     <li class="list-group-item">A second item</li>
    //     <li class="list-group-item">A third item</li>
    //     <li class="list-group-item">A fourth item</li>
    //     <li class="list-group-item">And a fifth one</li>
    //   </ul>
    // </div>

    // FRAGMENT (Hissa, Section) ********************************************
    // <>
    //   <h1>Heading</h1>
    //   <ul class="list-group">
    //     <li class="list-group-item active" aria-current="true">An active item</li>
    //     <li class="list-group-item">A second item</li>
    //     <li class="list-group-item">A third item</li>
    //     <li class="list-group-item">A fourth item</li>
    //     <li class="list-group-item">And a fifth one</li>
    //   </ul>
    // </>

    // MAP (Data To UI Elems) ********************************************
    <>
      <div className="container">
        {/* <h1>Healthy Items To Eat:</h1>
        <ul className="list-group">
          {abc}
          {
            Healthyitems.map((items, i) => (
              <li key={i} className="list-group-item" > {items}</li>
            ))
          }
        </ul> */}

        <ul className="list-group">
          {check}
          {
            students.map((data, i) => (
              <li key={i} className="list-group-item" > {data}</li>
            ))
          }
        </ul>
      </div >
    </>

  )
}

export default App
