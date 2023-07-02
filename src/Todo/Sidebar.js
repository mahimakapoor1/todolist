import React from 'react'
import './sidebar.css'
export default function Sidebar(props) {
  return (
    <div className='sidebar'>
        <ul>
        <br/>
            <li onClick={()=>{props.change("Inbox")}}><h2>Inbox</h2></li><br/>
            <li onClick={()=>{props.change("Today")}}><h2>Today</h2></li><br/>
            <li onClick={()=>{props.change("Next")}}><h2>Next 7 days</h2></li>
        </ul>
    </div>
  )
}
