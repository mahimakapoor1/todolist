import React, { useState } from 'react'
import Inbox from './Inbox'
import Today from './Today'
import Next7 from './Next7'

var list=[
  
]
export default function Main(props) {
    const [filteredlist,setfilteredlist]=useState(list)
    const addlist=(item)=>{
        const update=[...filteredlist,item]
        setfilteredlist(update)
        console.log(filteredlist)
    }
    const deleteItem = (number) => {
      const updatedList = filteredlist.filter((item) => item.number !== number);
      setfilteredlist(updatedList);
      console.log(updatedList);
    };
  return (
    <div className='main'>
        {props.active === "Inbox" && (<Inbox list={filteredlist} addtolist={addlist} delete={deleteItem} />)}
        {props.active === "Today" && (<Today list={filteredlist} delete={deleteItem} />)}
        {props.active === "Next" && (<Next7 list={filteredlist} delete={deleteItem} />)}
    </div>
  )
}
