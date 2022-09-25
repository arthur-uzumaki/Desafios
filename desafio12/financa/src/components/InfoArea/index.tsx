import * as C from './style'
import {formatCurrentMonth} from '../../helpers/dateFilter'
import {ResumeItem} from '../ResumeItem'
type Props = {
    currentMonth:string
    onMonthChange: (newMonth:string) => void
    income: number
    expense: number
}
export function InfoArea({currentMonth,onMonthChange , income , expense}:Props) {
   
    function handlePrevMonth(){
        const [year, month] = currentMonth.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month) -1 , 1)
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
    
    function handleNexMonth(){
        const [year , month] = currentMonth.split('-')
        const currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }
  return (
    <C.Conteiner>
        <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth) }</C.MonthTitle>
            <C.MonthArrow onClick={handleNexMonth}>➡️</C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
            <ResumeItem title="Receitas" value={income}/>
            <ResumeItem title="Despesas" value={expense}/>
            <ResumeItem 
                title="Balanço"
                value={income - expense}
                color={(income-expense) < 0 ? "red" : "green"}
                />
            
            
        </C.ResumeArea>
    </C.Conteiner>
  )
}

