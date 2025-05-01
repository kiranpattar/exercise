import React, { useState, useReducer } from "react";


import './App.css';
import A from './Components/A';
// import B from './Components/B';
// import C from './Components/C';


export const CountContext = React.createContext()
// export const ChannelContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {

console.log(state,action)
switch(action.type){
    case 'increment':
        return state + 1

    case 'decrement':
        return  state + 1

    case 'reset':
        return initialState

    default:
            return state
}
}

function App() {
    const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <header>
        <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
            <div>
                {count} 
                <A/>
            </div>
           
        </CountContext.Provider>
    
      </header>
    </div>
  );
}

export default App;

