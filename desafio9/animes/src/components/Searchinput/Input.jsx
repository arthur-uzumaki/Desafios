import { useState , } from 'react'
import { useDebounce } from './Debounce/useDebounce'

import './Input.css'
export function Input({value , onChange}){
    const [ displayValue, setDisplayValue] = useState(value)
    const debouncedChange = useDebounce (onChange,500)
    
    function handleChange(event){
        setDisplayValue(event.target.value)
        debouncedChange(event.target.value)
    }
    return(
        <div className="Input">
            <input type="text" value={displayValue} onChange={handleChange}/>
        </div>
    )
}