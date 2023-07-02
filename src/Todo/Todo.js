import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import './Todo.css'
export default function Todo() {
  const [active,setactive]=useState("Inbox")
  return (
    <div>
      <h1>TO DO APPLICATION</h1>
    <div className='container'>
      
        <div className= 'item side'>
        <Sidebar change={setactive}/>
        </div>
        <div className='item main'>
        <Main active={active}/>
        </div>
    </div>
    </div>
  )
}
