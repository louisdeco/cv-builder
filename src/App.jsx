import { useState } from 'react'
import './App.css'
import CVEditor from './CVEditor.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
    <CVEditor />
    </div>
  )
}

export default App;
