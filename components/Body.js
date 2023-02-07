import React from "react"

export default function Body(){
 function handleClick(){
  console.log("i was clicked");
 }
 return(
  <div className="container-1">
   <div className="sub-container-1">
    <div className="input-container">
     <input type="text" className="inputs" placeholder="Top text" />
     <input type="text" className="inputs" placeholder="Bottom text" />
    </div>
    <button onClick={handleClick}>Generate a new meme image 🖼</button>
   </div>
   <div className="sub-container-2">
    <img src="./images/memeimg.png"/>
    <h3 className="text-1">SHUT UP</h3>
    <h3 className="text-2">AND TAKE MY MONEY</h3>
   </div>
  </div>
 )
}