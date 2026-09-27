import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  // To map
  const [task, setTask] = useState([])


  const submitHandler = (e)=> {
    e.preventDefault()

    //made copy here  then push data
    const copyTask = [...task];

    copyTask.push({title,details});

    setTask(copyTask) // real data in array

    //console.log(copyTask); //replaces with new data only

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task]; //written destructuring
    
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}   className='flex gap-4 flex-col lg:w-1/2 items-start p-10 '>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
    
         {/* PEHLA INPUT FOR HEADING*/}
          <input 
          type="text" 
          placeholder='Enter Notes heading'
          className='px-5 py-2 w-full border-2 font-medium outline-none rounded'
          value={title}
          onChange={(e) =>{
            setTitle(e.target.value);
          }}
          />
          

        {/* DETAILED WALA INPUT */}
        <textarea 
          type="text"
          placeholder='Write Details' 
          className='px-5 w-full font-medium h-29 py-2 flex items-start flex-row border-2 outline-none rounded'
          value={details}
          onChange={(e) =>{
            setDetails(e.target.value);
          }}
          />
          <button 
          className='bg-white active:scale-95 w-full font-medium outline-none text-black px-5 py-2 rounded'
          >
            Add Notes
            </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
         {task.map(function(elem,idx){

          return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black py-8 px-4 bg-white">
          
          <div>
            <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-medium text-black'>{elem.details}</p>
          </div>
          <button onClick={() => {
            deleteNote(idx)
          }} className=' w-full cursor-pointer active:scale-95 bg-red-600
           text-white py-1 text-xs rounded font-bold'>Delete</button>
          </div>
         })}
        
      
        </div>
      </div>
    </div>
  )
}

export default App
