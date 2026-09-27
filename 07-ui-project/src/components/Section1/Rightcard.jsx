import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  console.log(props.color);
  return (
    <div className=' overflow-hidden relative h-full w-60 rounded-3xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
    <Rightcardcontent color ={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
