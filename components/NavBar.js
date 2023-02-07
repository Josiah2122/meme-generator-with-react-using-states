import React from "react"

const myArray = ['s', 't']
const myList = myArray.map(item => <p>{item}</p>)

export default function NavBar(){
 return(
  <div className="navbar">
   <img src="./images/troll.png"/>
   <h3>Meme Generator</h3>
   <p>React Cource - Project 3</p>
  </div>
 )
}