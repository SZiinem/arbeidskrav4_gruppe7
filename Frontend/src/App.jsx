// import { useState } from 'react'
import './App.css'
import Frans from './components/Frans'
import Filipe from './components/Filipe'
import Sinem from './components/Sinem'
import { Routes, Route} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)


function Page(){

  return (
      <main>
        <h1>Overskrift</h1>
      </main>
  )
  }

  return (
    <Routes>
      <Route index element={<Page />} />
      <Route path='frans' element={<Frans/>} />
      <Route path='filipe' element={<Filipe/>} /> 
      <Route path='sinem' element={<Sinem/>} />  
    </Routes>
  )
}


export default App
