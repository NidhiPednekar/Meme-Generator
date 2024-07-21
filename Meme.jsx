import memesData from "./memesData"
import React from "react"

export default function Meme(){

  const [memeImage,setMemeImage] = React.useState('')

  function getImage(){
    const memesArr = memesData.data.memes
    const randomNo = Math.floor(Math.random() * memesArr.length)
    const url = memesArr[randomNo].url
    console.log(url)
    setMemeImage(url)
    

  }
  return (
    <div>
      <form action="" className="container" id="form">
        <input type="text"  placeholder="Shut up"/>
        <input type="text" placeholder="and take my money" />
        <button onClick={getImage} className="genMeme" type="button">Get a new Meme 🏞️</button>
      </form>
      <img src={memeImage} alt="" className="meme-image"/>
    </div>
  )
}
