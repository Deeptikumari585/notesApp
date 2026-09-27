import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
  console.log(props.users.color);

  return (
    <div  id='right' className='shrink-0 flex  gap-5 h-[76vh] overflow-x-auto flex-nowrap  w-2/3  p-4'>
    {props.users.map(function(elem,idx){

      return <Rightcard  key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
    })}
    </div>
  )
}

export default Rightcontent
