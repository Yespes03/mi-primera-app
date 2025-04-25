import { useState } from 'react'
import senaLogo from '/sena.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center p-6">
      <img src={senaLogo} alt="SENA Logo" className="w-32 mb-6" />

      <h1 className="text-4xl font-bold mb-4">Mi Primera App</h1>

      <p className="text-sm text-gray-400 mb-1 tracking-wide">Contador</p>
      <div className="text-xl font-semibold mb-6">{count}</div>

      <div className="text-3xl font-bold mb-4">¡Hola, Yepes!</div>
      <div className="text-3xl font-bold mb-6">¡Hola, Alejandro!</div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Decrementar
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-10">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
