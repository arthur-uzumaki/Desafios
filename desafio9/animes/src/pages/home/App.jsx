import { useState , useEffect } from 'react'

import './App.css'
import { Input } from '../../components/Searchinput/Input'
export function App() {
 const [text , setText] = useState()
 const [anime , setAnime] = useState({}) 
  useEffect(() => {

    async function api(){
     if(text){
      setAnime({})
      console.log(text)
      const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=12`)
      const data = await response.json()
      setAnime(data)
   
      
     }
    }
    api()
  } , [text])
  return (
    <div className='App'>
      <h1>Animes</h1>
      <Input
   
     value={text} 
      onChange={(text) => setText(text)}
      />
      {text && !anime.data && <p className='span'>carregando..... </p>}
      
     {anime.data &&(
        <ul  className='anime-list'>
          {anime.data.map(anime => (
          <li key={anime.id}>
          <img src={anime.attributes.posterImage.small} alt="lista de imagens" />
             {anime.attributes.canonicalTitle}
          </li>
            
            ))}

            
        </ul>
      )}
    </div>
  )
}


