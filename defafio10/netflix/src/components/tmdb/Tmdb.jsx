
const Api_Key = 'b7397c3bd608ae306397bc7844020c42'
const  Api_Base = 'https://api.themoviedb.org/3'

async function basiFetch(endopint){
    const response = await fetch(`${Api_Base}${endopint}`)
    const data = await response.json()
    return data
}
export default{

   
    getHomerList: async () =>{
        return [
            {
                slug: 'originais',
                title: 'Originais da Netflix',
                items: await basiFetch
                (`/discover/tv?with_network=213&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados pra você',
                items: await basiFetch(`/trending/all/week?language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basiFetch(`/movie/top_rated?language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basiFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basiFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basiFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'romance',
                title: ' Romance',
                items: await basiFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${Api_Key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentario',
                items: await basiFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${Api_Key}`)
            }
        ]
    },
        getMovieInfo: async (movieId , type) => {
            let info  = {}
           if(movieId){
                switch(type){
                    case 'movie':
                            info = await basiFetch(`/movie/${movieId}?language=pt-BR&api_key=${Api_Key}`)
                        break

                    case 'tv':
                        info = await basiFetch(`/tv/${movieId}?language=pt-BR&api_key=${Api_Key}`)
                        
                    break
                    default:
                        info = null
                        break
                }
           }

           return info
        }
    }
   

