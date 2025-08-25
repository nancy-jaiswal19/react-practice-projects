import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  // let counter = 15

  const addValue = () =>{
    if(counter < 20){
      console.log("added");
      // counter = counter + 1
      setCounter(prevCounter => prevCounter+1)   // this is callback when its will get pss in bunch 
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    
    }
  }

  const removeValue = () =>{
    if(counter > 0){
      console.log("removed");
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter values: {counter}</h2>

      <button onClick={addValue} >Add value</button>
      
      <button onClick = {removeValue} >Remove value</button>
    </>
  )
}

export default App
