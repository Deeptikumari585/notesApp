import React , {useState} from 'react'

const App = () => {

  //  const [num, setNum] = useState({user:'Deepti'})

   //setNum runs asynchronus - koi pehle chalta, koi baad  mein

   const [num, setNum] = useState(10)

   const btnClicked = () => { 
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    //BATCH update
   }
    //If want to change here - DESTRUCTURING
    //console.log(num.user);

  //   const newNum = {...num};
  //   newNum.user='Deep'
  //   setNum(newNum)
  //  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
