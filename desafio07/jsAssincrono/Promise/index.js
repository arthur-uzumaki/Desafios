/**
 Promisse 
 A promisse de que algo irá acontecer  
 Poderá dar certo ou errado,
 mas irá acontecer
 * 
 */

 let  aceitar = true
    console.log('pedir uber')
 const promessa =  new Promise((resolve , reject) => {
    if(aceitar){
        return resolve('pedido acerto ')
    }
    else
    return reject('perdido negado🤦‍♂️')
 })
 console.log('aguardando')
 
promessa.then(result => console.log(result))
        .catch(erro => console.log(erro))
        .finally( () => console.log('Perdido finalizado👌'))