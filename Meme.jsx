import memesData from "./memesData"
import React from "react"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: 'https://i.imgflip.com/1g8my4.jpg'
  })

  const [allMemeImages] = React.useState(memesData)

  function getImage() {
    const memesArr = allMemeImages.data.memes
    const randomNo = Math.floor(Math.random() * memesArr.length)
    const url = memesArr[randomNo].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    getImage()
  }

  return (
    <div>
      <form className="container" id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="genMeme" type="submit">Get a new Meme 🏞️</button>
      </form>
      <div className="meme">

      <img src={meme.randomImg} alt="" className="meme-image" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>

      </div>
    </div>


  )
}


