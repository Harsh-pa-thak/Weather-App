import { useState } from 'react'
import './App.css'
import Search from './Search'
import Weather from './WetherInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search></Search>
      <Weather></Weather>  
    </>
  )
}

export default App
