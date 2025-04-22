import { useState } from 'react'
import viteLogo from '/sena.png'
import './App.css'
import Saludo from './components/Saludo'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    
      <div>
        <a href="
" target="_blank">
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
        
      </div>
      <h1>Mi Primera App</h1>
      <p> <code>Contador</code> </p>{count}

      <div>
    {/* Usa el componente como una etiqueta HTML */}
    <Saludo nombre="Yepes" />
    <Saludo nombre="Alejandro" />
  </div>
  
      <div className="card">
        <button onClick={() => setCount(count - 1)}>
          Decrementar 
        </button>
      </div>

      <div className="card1">
        <button onClick={() => setCount(count + 1)}>
          Incrementar 
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App