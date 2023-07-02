import React from 'react'
import './listcomponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
export default function Listcomponent(props) {
    const deletehandle=(number)=>{
        props.delete(number)

    }

  return (
    <div>
        {props.list.map((item)=>{
            return(
                <div className='task' key={item.number}>
                    <div>{item.title}</div>
                    {item.date.toLocaleDateString()}
                    <div className='action'>
                    <button onClick={()=>deletehandle(item.number)}>
                        <FontAwesomeIcon icon={faTrashAlt} size='3x' /></button>
                    
                    </div>
                </div>
            )
        })}
    </div>
  )
}
