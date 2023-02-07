import React from "react"
import ReactDOM from "react-dom"

import NavBar from "./components/NavBar"
import Body from "./components/Body"

import "./index.css"

function Page(){
 return(
  <div>
   <NavBar />
   <Body />
  </div>
 )
}

ReactDOM.render(<Page />, document.getElementById('root'))
