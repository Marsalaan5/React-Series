import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () =>{
    console.log("value added", counter);
    // counter = counter + 1
    setCounter(prevcounter => prevcounter+ 1);
    setCounter(prevcounter => prevcounter+ 1);
    setCounter(prevcounter => prevcounter+ 1);
    setCounter(prevcounter => prevcounter+ 1);
    setCounter(prevcounter => prevcounter+ 1);

    // if(counter ==20){
      // alert("Limits reached")
      // return counter
    // }
  }

  const removeValue =()=>{
    setCounter(counter - 1); 
  }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value:{counter}</h2>

    <button
    onClick={addValue}
    >Add value{counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value{counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
