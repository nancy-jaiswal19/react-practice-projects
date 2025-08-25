import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "nancy",
    age: 18
  }

  let newArr = [1,2,3];

  return (
    <>
      <h1 className  = "bg-green-500 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username ="chaiaurcode" position="software developer"/>
      <Card username ="nancy" />
    </>
  )
}

export default App
