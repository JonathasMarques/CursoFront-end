import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

// 4 - refatorando com hook
import { useConterContext } from "../hooks/useCounterContext.jsx";

const ChangeCounter = () => {
    const { counter, setCounter } = useConterContext();
    
  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter