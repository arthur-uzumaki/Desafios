import { useState , useEffect  } from 'react'
import './style.css'
import { Card } from '../../components/Card/Card'  
export function Homer() {
  const [nomeCliente,setnomeCliente] = useState('')
  const [students , setstudents] = useState([])
  const [user,setUser] = useState({name:'' , avatar:'' })

  function handleAddStudent() {
    const newStudent = {
      name: nomeCliente,
      time: new Date().toLocaleTimeString("pt-BR" ,{
        hour: '2-digit',
        minute: '2-digit',  
        second: '2-digit', 
      })
    }
    setstudents(preState => [ ...preState, newStudent])
  }
   useEffect(() => {
    async function fetcData(){
    const response = await fetch('https://api.github.com/users/Arttanjeiro')
    const data = await response.json()
     setUser({
      name: data.name,
      avatar: data.avatar_url

     })
   }
   fetcData()
  },[])

  return (
    <div className='container'>
   <header>
   <h1>Lista de Presença</h1>
   <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt="foto-perfil" />
   </div>
   </header>
   <input type="text" placeholder="Digite o nome..." 
   onChange={(e)=> setnomeCliente(e.target.value)}
   />
   <button type="button" onClick={handleAddStudent}>
    Adicionar
    </button>

   {
    students.map(student =>(
      <Card 
      key={student.time}
      name={student.name} 
      time={student.time}
      />
    ))
   
    
    }
   
   </div>
  )
}

