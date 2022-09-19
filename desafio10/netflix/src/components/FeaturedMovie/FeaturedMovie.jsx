import react from 'react'
import './FeaturedMovie.css'

  export  function  FeaturedMovie ({item})  {
    console.log(item)
    const genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if(description.length > 200){
      description = description.substring(0,200)+'...'
    }

    const firsDate = new Date(item.first_air_date)
  return (
    <div>
      <section className="featured" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        
      }}>
        <div className='featured--vertical' >
            <div className='featured--horizontal'>
              <div className='featured--name'>{item.original_name}</div>
            <div className='featured--info'>
              <div className='featured--points'>{item.vote_average} pontos</div>
              <div className='featured--year'>{firsDate.getFullYear()}</div>
              <div className='featured--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' :''}</div>
            </div>
                <div className='featured--description'>{description}</div>
                <div className='featured--buttons'>
                    <a href={`/watch/${item.id}`} className='featured--assistir'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
                        Assistir</a>
                    <a href={`/list/add/${item.id}`} className='featured--lista'>+Minha Lista</a>
                </div>
                <div className='featured--genres'><strong>Gêneros:</strong>{genres.join(', ')}</div>
          </div>


        </div>
      </section>

    </div>
  )
}