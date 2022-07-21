let formulario = document.querySelector('form')
formulario.addEventListener('submit' , function(e){
   
    e.preventDefault()
    let urlForm = ' https://pokeapi.co/api/v2/pokemon/'
    let nome = document.getElementById("name")
    urlForm = urlForm + this.name.value
    urlForm = urlForm.toLocaleLowerCase()
   
    // id content
    let resposta = document.getElementById('content')

    let imagens= document.getElementById('imgpokemon')

    let html
    fetch(urlForm)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        html = 'Nome: ' + maisculo( data.name) + '<br>'
        html = html + 'Type: ' +  maisculo( data.types[0].type.name)
        resposta.innerHTML = html

        imagens.innerHTML = "<img src= '"+data.sprites.front_default + "'><img src='"+ data.sprites.back_default+ "'>"
    })
    .catch(function(err){
      if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
      html = 'Pokémon não encontrado! 😒'
      }else{
        html = 'Erro:' +  err
      }
      resposta.innerHTML = html
    })



})

function maisculo(val) {
    return val[0].toUpperCase() + val.substr(1)
}