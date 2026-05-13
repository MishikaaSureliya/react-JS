import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Mishi",
    age: 21
  }
return (
  <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5 text-3xl font-bold">
      Tailwind Test
    </h1>
      <Card username = "Mishika" btnText = "click me" />
      <Card username="Mishi"  />

  </>
)
}

export default App
