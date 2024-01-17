import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseStage from "../components/HookUseStage";

import { useContext } from "react";
import { someContext } from "../components/HookUseContext";

const Home = () => {
  const {contextValue} = useContext(someContext)

  return (
    <div>
      <h1>Home</h1>
      <HookUseStage/>
      <HookUseReducer/>
      <HookUseEffect/>
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
    </div>
  );
};

export default Home;