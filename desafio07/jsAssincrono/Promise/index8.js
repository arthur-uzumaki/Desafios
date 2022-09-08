import axios from 'axios'

async function stat (){
  try{
    const user = await axios.get('https://api.github.com/users/maybrito')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  }catch(e){
    console.log(e)
  }
 

}
stat()