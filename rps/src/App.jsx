import { useState } from "react"
import paper from "./img/paper.svg"
import rock from "./img/rock.svg"
import scissors from "./img/scissors.svg"
import "./style.sass"

function App() {

  const [handClass, setHandClass] = useState("")
  const [playerChoice, setPlayerChoice] = useState(0)
  const [imageChoice, setImageChoice] = useState(null)
  const [enemyChoice, setEnemyChoice] = useState(0)
  const [choices, setChoices] = useState([rock, paper, scissors])
  const [counter, setCounter] = useState(3)
  const [enemyScore, setEnemyScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [classColors, setClassColors] = useState("")

  function handleChoice(id) {
    setClassColors(c => c + "activeColor ")
    setImageChoice(id)
    setPlayerChoice(0)
    setEnemyChoice(0)
    setCounter(3)
    let interval = setInterval(() => {
      setCounter(c => c - 1)
    }, 1000);
    setHandClass("shakehand ")
    setTimeout(() => {
      clearInterval(interval)
      setCounter("")
      setHandClass("")
      setImageChoice(null)
      setPlayerChoice(id)
      let enemyRandomChoice = Math.floor(Math.random() * 3)
      setEnemyChoice(enemyRandomChoice)
      if (id === enemyRandomChoice) {
        setClassColors("pTie ")
      } else if (
        (id === 0 && enemyRandomChoice === 2) || // Rock beats Scissors
        (id === 1 && enemyRandomChoice === 0) || // Paper beats Rock
        (id === 2 && enemyRandomChoice === 1)    // Scissors beat Paper
      ) {
        setPlayerScore(prevScore => prevScore + 1)
        setClassColors("pWin ")
      } else {
        setEnemyScore(prevScore => prevScore + 1)
        setClassColors("pLose ")
      }
    }, 2900)
  }

  return (
    <>
      <div id="game">
        <div className={"colors " + classColors}></div>
        <h1>Rock Paper Scissors!</h1>
        <h2 id="counter" className={handClass}>{counter}</h2>
        <div className="hands">
          <img src={choices[playerChoice]} className={handClass} alt="" />
          <img src={choices[enemyChoice]} className={handClass} alt="" />
        </div>
        <div className="score">
          <h3>{playerScore}</h3>
          <h3>{enemyScore}</h3>
        </div>
        <div className="choices">
          <img src={rock} className={handClass + (imageChoice === 0 ? "activeChoice " : "")} onClick={() => handleChoice(0)} alt="" />
          <img src={paper} className={handClass + (imageChoice === 1 ? "activeChoice " : "")} onClick={() => handleChoice(1)} alt="" />
          <img src={scissors} className={handClass + (imageChoice === 2 ? "activeChoice " : "")} onClick={() => handleChoice(2)} alt="" />
        </div>
      </div>
    </>
  )
}

export default App