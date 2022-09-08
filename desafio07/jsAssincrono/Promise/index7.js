async function stat(){
    const url = 'https://api.github.com/users/maybrito'
    const user = await fetch(url).then(response => response.json())
    const res = await fetch(user.repos_url).then(resp => resp.json())
    console.log(res)
  
  }
  
  stat().catch(e => console.log(e))