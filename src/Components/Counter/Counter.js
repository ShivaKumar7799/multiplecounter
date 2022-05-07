import Button from '../Button/Button';
import {useState} from 'react'
import React from 'react'
import './Counter.css'

export default function Counter(props) {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => { return prev + 1})
  }

  const decrement = () => {
    setCounter( (prev) => { return prev - 1})
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div class = "counterContainer" >
       <div class = "del" onClick={props.deleteCounter} > <div id = "index" >Counter : {props.index}</div> X </div>
       <div class = "Top Btn" >
          <Button name = "-" click = {decrement} />
           <span> {counter} </span>
          <Button name = "+" click = {increment}  />
        </div>

        <div class = "Bottom Btn">
           <Button name = "Reset" click = {reset} />
        </div>

    </div>
  )
}
