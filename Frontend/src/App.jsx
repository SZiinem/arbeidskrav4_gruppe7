// import { useState } from 'react'
import './App.css'
import Frans from './components/Frans'
import Filipe from './components/Filipe'
import Sinem from './components/Sinem'
import Header from './components/Header'
import Arbeidskrav from './components/Arbeidskrav'
import "./style/alt.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <section className='personer'>
        <Filipe />
        <Frans />
        <Sinem />
      </section>
      <section className='ak'>
        <Arbeidskrav />
      </section>

    </main>
  )
}



export default App
