import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setcounter]=useState(0)
  
  const addValue=()=>{
    console.log("clicked ",counter)
    
      counter=counter+1
      setcounter(counter)
  }
  const decreaseValue=()=>{
    if(counter>0){
      counter=counter-1
      setcounter(counter)
    }
    else{
      console.log("nohing changes")
    }
  }
  return (
    <>
     
      <h1>My name is Adnan</h1>
      <h2>counter value:{counter} </h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease value </button>
    </>
  )
}

export default App
