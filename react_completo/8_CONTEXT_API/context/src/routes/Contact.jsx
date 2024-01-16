// 3 - alterando valor do contexto
import { useContext } from "react";
import { CounterContext } from '../context/CounterContext.jsx';

// 4 - refatorando com hook
import { useConterContext } from "../hooks/useCounterContext.jsx";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx";

const Contact = () => {
  const { counter } = useConterContext();

  const {color} = useTitleColorContext();

  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>
        <p>Valor do counter: {counter}</p>
    </div>
  )
}

export default Contact