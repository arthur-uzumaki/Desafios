const entrar = document.getElementById("entrar")
const url = 'https://www.google.com/'

entrar.addEventListener('click' , (evento)=> {
    evento.preventDefault()
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    if(email.value == ""){
        email.classList.add('erroInput')
    }else{
       
        email.classList.remove('erroInput')
       
    }
    if(senha.value == ""){
        senha.classList.add("erroInput")
        
    }else{
        
        senha.classList.remove('erroInput')

    }
    if (email.value.indexOf("@") ==-1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") - email.value.indexOf("@")==1){
        email.classList.add('erroInput')
        
    }else{
        email.classList.remove('erroInput')
       cadastro()

    }
    if (senha.value.length <= 5) {
        senha.classList.add("erroInput")
       
    }else{
       
        senha.classList.remove('erroInput')
      
    }
})
function cadastro() {
    const saite = window.open(url , '_blank')
    saite.focus()
}
