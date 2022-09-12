import { useRef } from 'react'


export function useDebounce (fn , delay)  {
   const timeoutRef = useRef(null) 
    function debouncedFn(...agrs){
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current =  window.setTimeout(() =>{
            fn(...agrs) 
        }, delay)
       
    }
    return debouncedFn

}
