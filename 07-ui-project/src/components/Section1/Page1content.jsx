import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 pt-6 flex items-center gap-10 justify-between h-[90vh]  px-18'>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content
