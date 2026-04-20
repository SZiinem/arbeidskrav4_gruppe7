// import { useState } from 'react'
import './App.css'
import Frans from './components/Frans'
import Filipe from './components/Filipe'
import Sinem from './components/Sinem'
import Header from './components/Header'
import Arbeidskrav from './components/Arbeidskrav'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Filipe />
      <Frans />
      <Sinem />
      <Arbeidskrav />

    </main>
  )
}



export default App
