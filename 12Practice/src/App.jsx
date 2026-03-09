import { useState } from 'react'
import './App.css'
import Card from './component/Card' 
function App() {
  const [count, setCount] = useState('')
  
  return (
    <div>
    <Card Name={count} Surname={setCount}/>
    My Name is {count} 
    </div>

  
  )
}
export default App
