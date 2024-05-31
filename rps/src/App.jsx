import { useState } from 'react'
import paper from './img/paper.svg'
import rock from './img/rock.svg'
import scissors from './img/scissors.svg'
import './style.sass'

function App() {

  return (
    <>
      <div id='game'>
        <h1>Rock Paper Scisors!</h1>
        <h2 id="counter">3</h2>
        <div className="hands">
          <img src={paper} alt="" />
          <img src={rock} alt="" />
        </div>
        <div className="score">
          <h3>0</h3>
          <h3>0</h3>
        </div>
        <div className="choices">
          <img src={rock} alt="" />
          <img src={paper} alt="" />
          <img src={scissors} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
