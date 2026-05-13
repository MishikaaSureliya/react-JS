import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
   // counter +=1
   setCounter(counter + 1)
    // setCounter((prevCounter => prevCounter + 1))
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
     <h1>React counter</h1>
     <h2>Counter Value: {counter}</h2>

     <br/>
     <button 
     onClick={addValue}>Add Value {counter}</button>
     <br />
     <button
     onClick={removeValue}>Remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
