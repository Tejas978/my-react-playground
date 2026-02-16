import './App.css'
import Card from './component/Card'

function App() {
  let obj  = {
    username : "Alex",
    Age : "20"
  }
 let myarr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-2 
     rounded-xl'>
        Tailwind Test
      </h1>
      {/* <Card realn = "Tejas" test = {obj} newarr= {myarr}/> */}
      <Card realn = "Tejas"/>
      <Card  realm = "Khaire"/>
    
    </>
  )
}

export default App
