import React, {useState} from 'react'
 
import './MoviRow.css'

               
 export function MovieRow ({title , items})  {

  const [scrollx , seteScrollx] = useState(0)
  function handleftArrow(){
    let direcaoEsqueda = scrollx + Math.round(window.innerWidth/2)
    if(direcaoEsqueda > 0){
      direcaoEsqueda = 0
    }
    seteScrollx(direcaoEsqueda)
  }
   function handrighttArrow(){
    let direcaoDireta = scrollx - Math.round(window.innerWidth/2)
    let listW = items.results.length * 150
      if((window.innerWidth - listW  ) > direcaoDireta){
      direcaoDireta = (window.innerWidth - listW ) +955
    }
   
    seteScrollx(direcaoDireta)
   }
  return (
    <div className='movieRow'>
        <h2>{title}</h2>

          <div className='movirow--left' onClick={handleftArrow}>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><g><polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/></g></svg>
           
          </div>
        
          <div className='movirow--dire'onClick={handrighttArrow}>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
           
          </div>
        <div className='movirow--listarea' style={{
            marginLeft: scrollx,
            width: items.results.length * 150
            
          
        }}>

          <div className='movirow--list'>
            {items.results.length > 0 && items.results.map((item , key) =>(
              <div key={key} className='movirow--item'>
                 <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="lista de imagens" />
              </div>
              ))}
          </div>
          
        </div>
    </div>
  )
}