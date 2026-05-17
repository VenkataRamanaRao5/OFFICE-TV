import { useState } from 'react'
import Headerr from './components/Headerr'
import Tv from './components/Tv'
import './App.css'
import Speed from './components/Speed'
// import { useState } from 'react'

function App() {
  
  let [speed,setSpeed] = useState(100);

  return (
    <>
      <Headerr/>
      <Speed speed={speed} setSpeed={setSpeed}/>
      <Tv speed={speed}/>
    </>
  )
}

export default App
