let aceita = false 
console.log("Perdi uber")
const promessa = new Promise((resolve,reject)=>{
    if(aceita){
        resolve("Perdido realizado")
    }else
        reject('Perdido negado')
    })
async function stat(){
    try{
    const res = await promessa
    console.log(res)
    }catch(e){
        console.log(e)
    }finally {
        console.log('finalizado')
    }
}
console.log('aguardando')
stat()