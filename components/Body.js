import React from "react"


export default function Body(){
 const [meme, setMeme] = React.useState({
  topText: "One does not simply",
  bottomText: "walk into mordor",
  randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemes, setAllMemes] = React.useState([])

 React.useEffect(() => {
 fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data => setAllMemes(data.data.memes))
 }, [])

 // console.log(allMemes)
 
 function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const url = allMemes[randomNumber].url
   setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
    }))
 }
    
 function handleChange(event) {
  const {name, value} = event.target
   setMeme(prevMeme => ({
    ...prevMeme,
    [name]: value
  }))
 }

 return(
  <div className="container-1">
   <div className="sub-container-1">
    <div className="input-container">

     <input 
       type="text"
       className="inputs input1" 
       placeholder="Top text"
       name="topText" 
       value={meme.topText}
       onChange={handleChange}
      />
     <input 
      type="text" 
      className="inputs input2" 
      placeholder="Bottom text" 
      name="bottomText"
      value={meme.bottomText}
      onChange={handleChange}
     />

    </div>
    <button onClick={getMemeImage}>Generate a new meme image 🖼</button>
   </div>
   <div className="sub-container-2">
    <img src={meme.randomImage}/>
    <h3 className="text-1 meme-text">{meme.topText}</h3>
    <h3 className="text-2 meme-text">{meme.bottomText}</h3>
   </div>
  </div>
 )
}
