import { Outlet } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <h1>Context API</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
