import meme from '../public/meme.jpeg'


export default function Header(){
 
  return(
    <header>
      <img  src={meme} alt="" /> <h2 className='header-title'>Meme Generator </h2>
      <h4>Memes to Light Up Your Mood!</h4>
    </header>
  )
}


