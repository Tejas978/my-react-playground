import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 0
  let [counter,setcounter] = useState(0)
  const addvalue = () =>{
    if(counter == 20){
      setcounter("20")
    }else{
      setcounter(counter + 1)
    }
  }
  
  const RemoveVal = () =>{
    if (counter == 0){
      setcounter(0)
    }else{
      setcounter(counter-1)
    }
  }



 return (
    <>
      <h1>
        Let's Get Started Now
      </h1>
      <h2>
        Counter Game: {counter}
      </h2>
      <br />
      <button onClick={addvalue} >
        Add Value
      </button>
      <br />
      <button onClick={RemoveVal}>
        Remove Value
      </button>
      <p>Current Value is: {counter}</p>
    </>
  )
}
export default App
