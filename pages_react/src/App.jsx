import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 align="center">Hello from react! <b>{counter}</b> Times</h1>
      <button align="center" onClick={()=>{setCounter(counter+1)}}>Click!</button>
    </>
  )
}

export default App
