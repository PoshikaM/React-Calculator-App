import { useState } from "react";
import './App.css'

function App(){
  const [calc , setCalc] = useState('')

  const display = (e) => {
    let val = e.target.value;
    let update = calc+val;
    let op = '+-*/.';

    for(let i =0; i<update.length; i++){
      if(op.includes(update[i] && op.includes(update[i+1]))){
        update = update.slice(0, -1)
      }
    }
    setCalc(update)
  }

  const delDisplay = () => {
    let del = calc.slice(0, -1)
    setCalc(del)
  }

  const clear = () => {
    setCalc('')
  }

  const answer = () => {
    setCalc(eval(calc).toString())
  }

  return(
    <div className="calculator">
      <div className="input">{calc}</div>
      <div className="buttons">
      <button onClick={display} value='1'>1</button>
      <button onClick={display} value='2'>2</button>
      <button onClick={display} value='3'>3</button>
      <button onClick={display} value='+'>+</button>
      <button onClick={display} value='4'>4</button>
      <button onClick={display} value='5'>5</button>
      <button onClick={display} value='6'>6</button>
      <button onClick={display} value='-'>-</button>
      <button onClick={display} value='7'>7</button>
      <button onClick={display} value='8'>8</button>
      <button onClick={display} value='9'>9</button>
      <button onClick={display} value='*'>*</button>
      <button onClick={display} value='0'>0</button>
      <button onClick={display} value='.'>.</button>
      <button onClick={display} value='/'>/</button>
      <button onClick={answer} value='='>=</button>
      <button onClick={clear}>AC</button>
      <button onClick={delDisplay}>DEL</button>
      </div>
    </div>
  )
}

export default App;