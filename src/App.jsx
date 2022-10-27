import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Links from './components/Links'
import Homepage from './routes/Homepage'
import Authentication from './routes/Authentication'
import Feed from './routes/Feed'
import Profile from './routes/Profile'
import ContentSingle from './routes/ContentSingle'
import logo from './assets/logo.png'
import DatabaseTest from './routes/DatabaseTest'

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
