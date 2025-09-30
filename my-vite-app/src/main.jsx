import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  return(
    <h1>This is from my App</h1>
  )
}
// this is jsx syntax 
// const Newway=(
//   <h1>this is from Newway</h1>
// )

let reactelement=React.createElement(
  "div",
  null,
  "hello from pakistan"
)
createRoot(document.getElementById('root')).render(
  reactelement
)
