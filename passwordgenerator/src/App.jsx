import { useState ,useCallback,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {

  const [length, Setlength]=useState(8)
  const [numallowed, setnumallowed]=useState(false)
  const [charallowed,setcharallowed]=useState(false)
  const [password,setpassword]=useState("")
  let passRef=useRef(null)
  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str+="0123456789"
    if(charallowed) str+="!@#$%&*"
    for (let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
    
  } ,[length,numallowed,charallowed,setpassword])
  const copyPassword=useCallback(()=>{
    passRef.current?.select()
         window.navigator.clipboard.writeText(password)
  },[password])
 useEffect(()=>{
      passwordgenerator()
 },[length,numallowed,charallowed,passwordgenerator])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
  <h1 className='text-white text-center'>Password Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 bg-white' 
      placeholder='password'
      readOnly 
      ref={passRef}
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>copy</button>
  </div>
  <div className='flex  text-sm gap-x-2 '> 
    <div className='flex items-center gap-x-1'>
      <input type="range" 
      min={6}
      max={100}
      value={length}
      className='cursor-pointer '
      onChange={(e)=>{Setlength(e.target.value)}} />
      <label >length : {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={numallowed}
      id="numberInput"
      onChange={()=>{
        setnumallowed((prev)=>!prev)
      }}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={charallowed}
      id="numberInput"
      onChange={()=>{
        setcharallowed((prev)=>!prev)
      }}
      />
      <label htmlFor="numberInput">characters</label>
    </div>
  </div> 
</div>
    </>
  )
}

export default App
