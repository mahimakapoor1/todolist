import React, { useRef, useState } from 'react'
import Listcomponent from './Listcomponent'
import './inbox.css'
export default function Inbox(props) {
    const [newtask,setnewtask]=useState(false)
    const titleref =useRef()
    const dateref=useRef()
    const counterref = useRef(props.list.length + 1);
    const date=new Date()
    const newtaskhandle=()=>{
        setnewtask(true)
    }
    const cancelhandle=()=>{
        setnewtask(false)
    }
    const Addhandle=(e)=>{
        e.preventDefault()
        if(titleref.current.value===""){
            window.alert("Give Task")
            return
        }
        if(dateref.current.value===''){
            window.alert("Give valid date")
            return
        }
        const object={
            number:counterref.current,
            title: titleref.current.value,
            date: new Date(dateref.current.value)
        }
        props.addtolist(object);
        counterref.current++;
        setnewtask(false)
    }

  return (
    <div className='container1'>
        <h2>ADD TASK</h2>
        {!newtask && (
            <button className='add-task' onClick={newtaskhandle}>Click to Add Task</button>
        )}
        {newtask && (
            <form className='form'>
                <input type='text' ref={titleref} placeholder='add new task...'/>
                <input type='date' ref={dateref} defaultValue={date}/>
                <div>
                    <button onClick={Addhandle}>Add task</button>
                    <button onClick={cancelhandle}>Cancel</button>
                </div>
                <br/>
            </form>
            
              )}
                <Listcomponent list={props.list} delete={props.delete}/>        
      
    </div>
  )
}
