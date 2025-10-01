import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  let [color,SetColor]=useState("olive")

  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>

          <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl' >
              <button className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}       onClick={()=>SetColor("red")}>Red</button>
               <button className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}        onClick={()=>SetColor("green")}>Green</button>
                <button className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}   onClick={()=>SetColor("blue")} >Blue</button>
                <button className='outline-none  px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}}   onClick={()=>SetColor("yellow")} >Yellow</button>
                <button className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}   onClick={()=>SetColor("pink")} >Pink</button>
                <button className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}   onClick={()=>SetColor("purple")} >Purple</button>
                <button className='outline-none  px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}   onClick={()=>SetColor("white")} >White</button>
                <button className='outline-none  px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}   onClick={()=>SetColor("black")} >Black</button>
 
 
            </div>
          </div>
    </div>
  )
}

export default App
