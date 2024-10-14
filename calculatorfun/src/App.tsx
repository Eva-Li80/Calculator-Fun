import './App.css'
import ColorChange from './components/ColorChange'
import Comments from './components/Comments'
import Counter from './components/Counter'
import Header from './components/Header'
import Quiz from './components/Quiz'
import RandomNumber from './components/RandomNumber'
import Timer from './components/Timer'
import Todo from './components/Todo'

function App() {


  return (
    <>
    <Header/>
      <Counter/>
      <Todo/>
      <ColorChange/>
      <RandomNumber/>
      <Timer/>
      <Comments/>
      <Quiz/>
    </>
  )
}

export default App
