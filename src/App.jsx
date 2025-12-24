import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-semibold text-2xl text-red-400'>
        Hello Pachara
      </div>
    </>
  )
}

export default App
