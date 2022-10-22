import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Links from './components/Links'
import Homepage from './components/Homepage'
import Authentication from './components/Authentication'
import Feed from './components/Feed'
import Profile from './components/Profile'
import logo from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Links />
    </div>
  )
}

export default App
