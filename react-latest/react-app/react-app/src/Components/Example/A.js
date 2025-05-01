import React,{useContext} from  'react'
// import B from '../Components/B'
// import { UserContext,ChannelContext } from '../App'
import { CountContext } from '../App2'


function A(){ 
    const countContext = useContext(CountContext)
    // const channel = useContext(ChannelContext)
    return (
       <div>
            {/* {user }  */}
            {countContext.countState}
            <button onClick={() => countContext.countDispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={() => countContext.countDispatch({type:'reset',value:1})}>Reset</button>
            <button onClick={() => countContext.countDispatch({type:'decrement',value:1})}>Decrement</button>

       </div> 
    )
}
export default A

