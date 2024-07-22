import memesData from "./memesData"
import React from "react"

export default function Meme(){

  const [meme,setMeme ] = React.useState({
    opText:"",
    bottomText:"",
    randomImg:'https://imgflip.com/i/8xah78'
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  function getImage(){
    const memesArr = allMemeImages.data.memes
    const randomNo = Math.floor(Math.random() * memesArr.length)
    const url = memesArr[randomNo].url
    setMeme(prevMeme =>({
      ...prevMeme,
      randomImg:url
    }))
    

  }
  return (
    <div>
      <form action="" className="container" id="form">
        <input type="text"  placeholder="Shut up"/>
        <input type="text" placeholder="and take my money" />
        <button onClick={getImage} className="genMeme" type="button">Get a new Meme 🏞️</button>
      </form>
      <img src={meme.randomImg} alt="" className="meme-image"/>
    </div>
  )
}

