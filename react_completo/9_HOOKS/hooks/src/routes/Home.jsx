import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseStage from "../components/HookUseStage";

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <HookUseStage/>
      <HookUseReducer/>
      <HookUseEffect/>
    </div>
  );
};

export default Home;