import { useState , KeyboardEvent } from 'react'
import * as C from './styles'


type Props = {
    onEnter: (taskName:string) => void

}
export function AddArea({onEnter}:Props ) {
    const [inputText , setInputText] = useState('')
    

    function handlekeyUp(e: KeyboardEvent){
        if(e.code == 'Enter' && inputText !== ''){
            onEnter(inputText) 
            setInputText('')
        }
    }
  return (
    
        <C.Conatainer>
            <div className='image'>➕</div>
            <input type="text"
            placeholder='Adicione um tarefa'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            // onkeyup é um evento js quando á pessoa digita
            // quando ele solta tecla chama função 
            onKeyUp = {handlekeyUp}

            />
        </C.Conatainer>
    
  )
}
