import { useState } from 'react'
import './App.css'

// 2 - imagem em assets
import night from "./assets/night.jpg"

// 3 - useState 
import Data from './components/Data'

// 4 - renderização de lista 
import ListRender from './components/ListRender'

// 7 - render condicional 
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - fragments
import Fragment from './components/Fragment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data/>
      {/* 4 - render de lista */} 
      <ListRender/>
      {/* 7 - render condicional */}
      <ConditionalRender/>
      {/* 8 - props */}
      <ShowUserName name="Matheus"/>
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho"/>
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={123444} color="Branco"/>
      <CarDetails brand="Audi" km={9987} color="Azul"/>
      {/* 11 - renderização de listas com componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color}/>
      ))}
      {/* 12 - Fragments */}
      <Fragment/>
    </div>
  )
}

export default App
