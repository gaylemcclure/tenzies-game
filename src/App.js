import React, { useState } from 'react';
import './styles.css'
import Heading from "./Components/Heading"
import { nanoid } from 'nanoid';
import Die from './Components/Die';
import RollButton from "./Components/Button"
import Confetti from 'react-confetti';
import Counter from './Components/Counter';

function App() {

  const [diceNumbers, setDiceNumbers] = useState(randomNumber())
  const [tenzies, setTenzies] = useState(false)
  const [count, setCount] = useState(0)


  React.useEffect(() => {
    const allHeld = diceNumbers.every(diceNumber => diceNumber.isHeld)
    const firstValue = diceNumbers[0].value
    const sameDice = diceNumbers.every(diceNumber => diceNumber.value === firstValue)
    if (sameDice && allHeld) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [diceNumbers])

  function randomNumber() {
    let dieNumbers = []
    for (let i = 0; i < 10; i++) {
      dieNumbers.push({
        value: Math.floor(Math.random() *6 + 1),
        isHeld: false,
        id: nanoid()
      })
    
    }
    return dieNumbers
  }

  const makeDice = diceNumbers.map(diceNumber => (
    <Die 
      key={diceNumber.id}
      id={diceNumber.id} 
      value={diceNumber.value}
      isHeld={diceNumber.isHeld}
      holdDice={() => holdDice(diceNumber.id)}
    />))

  function holdDice(id) {
    setDiceNumbers(prevHeld => prevHeld.map(diceNumber => {
      return diceNumber.id === id ? 
        {...diceNumber, isHeld: !diceNumber.isHeld} : diceNumber
    }))
  }

  function rollDice() {
    if (tenzies === false) {
      setCount(prevCount => prevCount + 1)
      console.log(count)
      setDiceNumbers(prevHeld => prevHeld.map(diceNumber => {
        return diceNumber.isHeld === false ?
          {...diceNumber, value: Math.floor(Math.random() *6 + 1)} : diceNumber
    }))}
    else {
      setDiceNumbers(randomNumber)
      setTenzies(false)
      setCount(0)
    }
  }

  return (
    <main>
      <h1 className={tenzies ? "congrats_text" : "hidden"}>You<br/> Won!!!</h1>
      <div className={tenzies ? "popup" : ""}></div>
      <div className="main">
        {tenzies && <Confetti />}
        <Heading />
        <Counter count={count}/>
        <div className="dice-container">{makeDice}</div>
        <RollButton roll={tenzies ? "New Game" : "Roll"} click={rollDice} />
      </div>
    </main>
  )
}

export default App;
