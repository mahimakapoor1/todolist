import React from 'react'
import Listcomponent from './Listcomponent'

export default function Next7(props) {
  const date=new Date()
  const filtered= props.list.filter((item)=>{
      const diff=Math.ceil((item.date-date)/(24*60*60*1000))
      if(diff>1 && diff<8)
       return true
    return false
  })
  return (
    <div>
      <h2>TASK FOR THE NEXT 7 DAYS</h2>
      <Listcomponent list={filtered} delete={props.delete} />
    </div>
  )
}
