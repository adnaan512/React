import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  let [color,SetColor]=useState("olive")

  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>

          <div className=''></div>
    </div>
  )
}

export default App
