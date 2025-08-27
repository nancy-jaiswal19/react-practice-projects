import {useState} from "react";
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl ">

        <button onClick = {() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
        <button onClick = {() => setColor("midnightblue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "midnightblue"}}>midnightblue</button>
        <button onClick = {() => setColor("purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick = {() => setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
        <button onClick = {() => setColor("rosybrown")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "rosybrown"}}>rosybrown</button>
        <button onClick = {() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick = {() => setColor("gold")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gold"}}>gold</button>
        <button onClick = {() => setColor("crimson")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "crimson"}}>crimson</button>
        <button onClick = {() => setColor("teal")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "teal"}}>teal</button>
      </div>
    </div>
    </div>
  )
}

export default App
