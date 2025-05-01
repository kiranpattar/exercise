import React, { useState, useCallback ,useMemo} from "react";


import './App.css';
// import CounterTwo from './Components/CounterTwo';
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// function App() {
//   return (
//     <div>
//       <header>
//         {/* <HookCounter/> */}
//         <UserContext.Provider value={'kiran'}>
//           <ChannelContext.Provider value={'Pattar'}>
//               <A/>
//           </ChannelContext.Provider>
            
//         </UserContext.Provider>
    
//       </header>
//     </div>
//   );
// }

// function App(){
//      return (
//       <CounterTwo/>
//      )
// }

// export default App;



// function Button({ onClick, children }) {
//   console.log("Button rendered");
//   return <button onClick={onClick}>{children}</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState("");

//   // useCallback memoizes the increment function, so it won't be recreated on each render.
//   const increment = useCallback(() => setCount((prevCount) => prevCount + 1), []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <Button onClick={increment}>Increment Count</Button>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Type something"
//       />
//     </div>
//   );
// }



function ExpensiveCalculation({ count }) {
  // This function simulates an expensive calculation.
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
    } // Simulating heavy computation
     return num * 2;

    
  };

  // useMemo memorizes the result of the expensive function based on the count.
  const result = useMemo(() => expensiveCalculation(count), [count]);

  return <div>Result of the calculation: {result}</div>;
}

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div>
      <ExpensiveCalculation count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}



export default App;

