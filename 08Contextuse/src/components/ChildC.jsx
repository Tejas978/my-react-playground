import React, { useContext } from 'react'
import {UserContext} from "../App"

function ChildC() {
  const Anyname = useContext(UserContext)
  return (
    <div>
      data: {Anyname.name}
    </div>
  )
}

export default ChildC