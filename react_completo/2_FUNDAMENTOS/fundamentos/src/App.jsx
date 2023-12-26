import './App.css'

// 2 - importando componente
import FirstComponent from './components/FirstComponent'


// 4 - template expression 
import TemplateExpression from './components/TemplateExpression'

// 5 - hierarquia de componentes
import { MyComponent } from './components/MyComponent'
import { Events } from './components/Events'

function App() {
  // 3 - comentarios 

  return (
    <>
    {/* 3 - comentario JSX */}
    <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
