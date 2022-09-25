import { useState } from 'react'
import { categories } from '../../data/categories'
import { Item } from '../../types/Item'
import * as C from './style'
import {newDateAdjusted} from '../../helpers/dateFilter'

type Props = {
    onAdd: (item:Item) => void
}
export function InputArea({onAdd}:Props){
    const [dateField , setDateField]= useState('')
    const [cateoryField , setCateoryField]= useState('')
    const [titleField, setTitleFilde]= useState('')
    const [valueField , setValueField]= useState(0)
    
    const categorykeys: string[] = Object.keys(categories)
    function handleAddEvent(){
        const errors : string[] = []
        if(isNaN(new Date(dateField).getTime())){
            errors.push('categoria invalida!')
        }
        if (titleField === '') {
            errors.push('titulo inválido!')
        }
        if (valueField <= 0) {
            errors.push('valor inválido!')
        }
        if (errors.length > 0) {
            alert(errors.join('\n'))
        }else{
            onAdd({
                date: newDateAdjusted(dateField),
                category: cateoryField,
                title: titleField,
                value: valueField
            })
            clearField()
        }
    }
    function clearField(){
        setDateField('')
        setCateoryField('')
        setTitleFilde('')
        setValueField(0)
    }
    return(
        <C.Conteiner>
            <C.InputLabel>
                <C.InpuTitle>Data</C.InpuTitle>
                <C.Input type='date' value={dateField} onChange={e => setDateField(e.target.value)}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InpuTitle>Categoria</C.InpuTitle>
                <C.Select value={cateoryField} onChange={e => setCateoryField(e.target.value)}>
                    <>
                    <option></option>
                    {categorykeys.map((key , index)=>(
                        <option key={index} value={key} > {categories[key].title}</option>

                    ))}
                    </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InpuTitle>Titulo</C.InpuTitle>
                <C.Input type='text' value={titleField} onChange={e => setTitleFilde(e.target.value)}/>
            </C.InputLabel>
            <C.InputLabel>
                <C.InpuTitle>Valor</C.InpuTitle>
                <C.Input type='number' value={valueField} onChange={e => setValueField(parseFloat(e.target.value))}/>

            </C.InputLabel>
            <C.InputLabel>
                <C.InpuTitle>&nbsp;</C.InpuTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>

        </C.Conteiner>
    )
}