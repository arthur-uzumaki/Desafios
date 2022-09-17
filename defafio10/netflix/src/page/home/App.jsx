import { useState , useEffect } from 'react'
import './App.css'
import  Tmdb  from '../../components/tmdb/Tmdb'
import { MovieRow } from '../../components/MovieRow/MovieRow'
import { FeaturedMovie } from '../../FeaturedMovie/FeaturedMovie'
import { Hearde } from '../../components/Header/Hearde'

export function App() {
  const [movieList,setMovieList] = useState([])
  const [ featuredData,setFeaturedData] = useState(null)
  const [blackHearde,setBlackHeard] = useState(false);
   useEffect(() => {
    async function loadAll() {
      // pergando lista Total
      const list = await Tmdb.getHomerList()
     setMovieList(list)

      //pergando o featured
               
      const originais = list.filter(i=> i.slug ==='originais')
      const random = Math.floor(Math.random() * (originais[0].items.results.length -1))
      const chosen = originais[0].items.results[random]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
      
    }

    loadAll()
  },[])
  
    useEffect(() =>{
      // Aterar scroll
      function scrollList(){
        if(scrollY > 10){
          setBlackHeard(true);
      }else{
        setBlackHeard(false);
      }
    }
      addEventListener('scroll', scrollList)
       return() =>{
        removeEventListener('scroll', scrollList)
       }

    } , [])
  return(
    <div className="page">
      <Hearde black={blackHearde}/>
        
      
      
      {featuredData &&
        <FeaturedMovie 
          item={featuredData}
        />
      }
    

      <section className="list">
        {movieList.map((item , key)=>(
          <MovieRow 
          key={key}   
          title = {item.title} 
          items = {item.items}
          />
        ))}
      </section>

      <footer>
        feito com <span role='img' aria-label='coração'>❤</span> pelo Arthur <br/>
        Direitos de imagem para Netflix <br/>
        Dados pegos do site Themoviedb.org
      </footer>
      {
        movieList.length <= 0  && 
    
        <div className='loading'>
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
        </div>
      }
    </div>
  )
}
