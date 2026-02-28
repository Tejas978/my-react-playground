import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function Home() {
  const homee = useNavigate();
  function handleC(){
    homee("/about");
  }
  return (
    <div>
      Home
      <button onClick={handleC}>Moved about</button>
    </div>

  )
}

export default Home