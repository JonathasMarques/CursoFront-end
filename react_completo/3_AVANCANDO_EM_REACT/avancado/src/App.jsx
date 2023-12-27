import { useState } from 'react'
import './App.css'

// 2 - imagem em assets
import night from "./assets/night.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
    </>
  )
}

export default App
