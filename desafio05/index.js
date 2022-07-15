document.getElementById("verificar").onclick=function () {
    let data = new Date()
    let ano = data.getFullYear()
    let idade = document.getElementById("ano")
    let res = document.getElementById("res")
    if(idade.value.length == 0 || Number( idade.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
       let sexo = document.getElementsByName('radsex')
       let ida = ano - Number(idade.value)
       let genero = ''
       let img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       if(sexo[0].checked){
        genero = 'Homem'
        if(ida >=0 && ida < 10){
            img.setAttribute('src'  , 'criançaM.jpg')
        }else if (ida < 21) {
            img.setAttribute('src' , 'jovenM.jpg')
        }else if(ida < 50){
            img.setAttribute('src' , 'adutoM.jpg')
        }else{
            img.setAttribute('src' , 'idosoM.jpg')
        }
       }else if (sexo[1].checked) {
        genero = 'Mulher'
        if(ida >=0 && ida < 10){
            img.setAttribute('src' , 'criançaF.jpg')
        }else if (ida < 21) {
            img.setAttribute('src' , 'jovenF.jpg')
        }else if(ida < 50){
                img.setAttribute('src' , 'adutoF.jpg')
        }else{
            img.setAttribute('src' , 'idosaF.jpg')
        }
       }
     
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${ida} anos.`
       res.appendChild(img)
       idade.focus()
    }
}