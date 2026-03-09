import React from 'react'

function Card(props) {
  return (
    <div>
        <input type="text" onChange={(e)=> 
        props.Surname(e.target.value)}>

        </input>
    </div>
  )
}

export default Card