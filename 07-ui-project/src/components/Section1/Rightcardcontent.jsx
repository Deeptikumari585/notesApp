import React from 'react'

const Rightcardcontent = (props) => {

    console.log(props.color);
  return (
    <div>
      <div className='absolute top-0 left-0 w-full he-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
        <div className='translate-y-36'>
            <p className='text-black text-shadow-2xs leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptas in illum!</p>
            <div className= 'flex items-center justify-between'>
                <button style ={{backgroundColor:props.color}} className=' text-white font-semibold px-5 py-1 rounded-full'>{props.tag}</button>
                <button className=' text-white font-medium px-2 py-1 rounded-full'><i className ="ri-arrow-right-line"></i></button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Rightcardcontent
