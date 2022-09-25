import { useState , useEffect} from 'react'
import { Item } from '../../types/Item'
import { Category } from '../../types/Category'
import { items } from '../../data/items'
import { categories } from '../../data/categories'
import { getCurrentMonth , filterListByMonth } from '../../helpers/dateFilter'
import { TableArea } from '../../components/tableAreas'
import {InfoArea} from '../../components/InfoArea'
import { InputArea } from '../../components/InputArea'

import * as C from './App.styles'

export function App() {
  // Lista geral
  const [list , setList] = useState(items)
  //filtra list
  const [filteredList , setFilteredList] = useState<Item[]>([])
   //filtra data
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [ income , setIncome] = useState(0)
  const [ expense, setExpense] = useState(0)
  
  useEffect(()=>{
    setFilteredList(filterListByMonth(list , currentMonth ) )
  },[list,currentMonth])

  useEffect(() => {
    let incomeCount =0
    let expenseCout = 0

    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCout += filteredList[i].value
      }else{
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCout)
  } ,[filteredList])

  function handleMonthChange(newMonth:string){
    setCurrentMonth(newMonth)
  }
  function handleAddItem(item: Item){
    const newList = [...list]
    newList.push(item)
    setList(newList)
  }
  return(
    <C.Conteiner>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
     </C.Header>
      <C.Body>
       <InfoArea
        currentMonth= {currentMonth}
        onMonthChange={handleMonthChange}
        income= {income}
        expense = {expense}
       />
        
        <InputArea onAdd={handleAddItem}/>

        <TableArea lista={filteredList}/>
          
     

      </C.Body>
    </C.Conteiner>
  )
}