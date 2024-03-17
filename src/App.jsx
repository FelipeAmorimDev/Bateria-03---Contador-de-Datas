import { useState } from 'react'
import { Contador } from './Contador'

export function App() {
  const [intervals, setIntervals] = useState(1)
  const [counter, setCounter] = useState(0)


  const handleClickMinusInterval = () => setIntervals((i) => {
    if(i > 1){
      return i - 1
    }

    return i
  })
  const handleClickPlusInterval = () => setIntervals((i) => i + 1)
  const handleClickMinusCounter = () => setCounter((c) => c - intervals)
  const handleClickPlusCounter = () => setCounter((c) => c + intervals)

  const date = new Date()
  const pastDaysInMillis = counter * 24 * 60 * 60 * 1000
  
  date.setTime(date.getTime() + pastDaysInMillis)

  const actualDateFormated = date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <div className="container">
      <div className="count">
        <button onClick={handleClickMinusInterval}>-</button>
        <h2>
          Intervalo: {intervals}
        </h2>
        <button onClick={handleClickPlusInterval}>+</button>
      </div>
      <div className="count">
        <button onClick={handleClickMinusCounter}>-</button>
        <h2>
          Contador: {counter}
        </h2>
        <button onClick={handleClickPlusCounter}>+</button>
      </div>
      {counter === 0 && <h2 className="container">Hoje é {actualDateFormated}</h2>}
      {counter >= 1 && <h2 className="container">{counter} {counter > 1 ? "dias" : "dia"} á partir de hoje será {actualDateFormated}</h2>}
      {counter < 0 && <h2 className="container">{Math.abs(counter)} {counter < -1 ? "dias" : "dia"} atrás era {actualDateFormated}</h2>}
    </div>
  )
}