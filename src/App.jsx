import { useState } from 'react'
import './App.css'

function App() {

  const [isRed, setRed] = useState(false)
  const [raqam, setRaqam] = useState(0)

  const qosh = () => {
    setRaqam(raqam + 1)
    setRed(!isRed);
  }


  return (
    <>
      <h1 className={isRed ? "red" : ""}>Men qizil bo'laman nasib qilsa</h1>
      <button onClick={qosh}>+</button>
      <span> {raqam}</span>
    </>
  )
}

export default App
