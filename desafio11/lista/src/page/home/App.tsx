import { useState } from 'react'
import { Item } from '../../types/item'
import { ListImtem } from '../../components/ListItem'
import { AddArea } from '../../components/AddArea'

import * as C from './App.styles'
export function App() {
  
  const [ list , setList] = useState<Item[]>([
    {id:1 , name:'comprar carne', done: false},
    {id:2, name:'comprar açucar', done: true},
  ])
  function handleTaskChange(id: number, done: boolean){
    let newList = [... list]
    for(let i in newList){
      if(newList[i].id == id){
        newList[i].done = done
      }
    }
    setList(newList)
  }
  function handleAddTask(taskName: string){
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name:taskName,
      done: false
    })
    setList(newList)
  }
  return (
        <C.Conatainer>
           <C.Area>
            <C.Header>Lista de Tarefas</C.Header>
            <AddArea onEnter = {handleAddTask}/>  
          {list.map((item , index)=>(
           <ListImtem
           key={index}
           item = {item}
           onChange = {handleTaskChange}
        />
      ))}
          </C.Area>
        </C.Conatainer>
  )
}


