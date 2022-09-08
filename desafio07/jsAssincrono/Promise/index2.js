

let foi = false

console.log('Indo no mercado')
const promessa = new Promise((resolve , reject) =>{
    if(foi){
        resolve('foi no mercado')
    }
    else
        reject('não foi no mercado')
})
promessa.then(resolve => console.log(resolve))
        .catch(erro => console.log(erro))
        .finally(() => console.log('finalizado'))
console.log('Aguadando resposta')

