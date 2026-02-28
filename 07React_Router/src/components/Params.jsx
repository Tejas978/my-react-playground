import { useParams } from "react-router-dom";
import React from 'react'

function Params() {
    const {id} = useParams();
  return (
    <div>Params: {id}
    <br />
    <h1>Testing Params</h1>
    </div>
  )
}

export default Params