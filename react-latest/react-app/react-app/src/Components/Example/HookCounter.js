import React,{useState} from 'react'
function HookCounter(){
    const resetCounter=0
    const [count,setCount]=useState(resetCounter)
    
       
    
    return (
        <div>
            <div>
            {count}
            </div>
            <button onClick={()=>{setCount(prevcount=> prevcount+1)}}>Increment</button>
            <button onClick={()=>{setCount(resetCounter); }}>Reset</button>

            <button onClick={()=>{setCount(prevcount=> prevcount-1)}}>Decrement</button>
            <button onClick={()=>{setCount(prevcount=> prevcount + 5)}}>Increment 5</button>

            
        </div>
    )
}
export default HookCounter

