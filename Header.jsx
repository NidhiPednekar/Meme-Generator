import meme from '../public/meme.jpeg'

export default function Header(){
  return(
    <header>
      <img src={meme} alt="" /> <h2 className='header-title'>Meme Generator </h2>
      <h4>Make your day with Memes!!</h4>
    </header>
  )
}







