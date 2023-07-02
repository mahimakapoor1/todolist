import React from 'react'
import Listcomponent from './Listcomponent'

export default function Today(props) {
  const date=new Date()
  const filtered= props.list.filter((item)=>{
    if(date.getFullYear()!==item.date.getFullYear())
     return false
    if(date.getMonth()!==item.date.getMonth())
     return false
    if(date.getDate()!==item.date.getDate())
     return false

    return true
  })
  return (
    <div>
      <h2>TASK TO DO TODAY</h2>
      <Listcomponent list={filtered} delete={props.delete} />
    </div>
  )
}
