import React, {  InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';



export type textInputRoot = {
    children: ReactNode;
 }
 function TextInputRoot (props:textInputRoot ) {
    
    return(
        <div className='flex items-center h-12 gap-3 py-3 px-4 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>    
    )
 }
 export type TextInputIcon = {
    children:ReactNode;
 }
 function TextInputIcon(props:TextInputIcon){
    return(
        
    <Slot className='w-6 h-6 text-gray-400'>
        {props.children}
    </Slot>
    )
 }
 export interface  textInputProps  extends InputHTMLAttributes<HTMLUnknownElement> {}
 function TextInputInput (props:  textInputProps) {

    return(
       
            <input
            className = 'bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                {...props}
            />
    )
}
export const TextInput ={
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}