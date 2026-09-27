// import React, {useState} from 'react'

// const App = () => {

  //way to declare variable
  // const [num, setNum] = useState(20)
  // const [username, setUsername] = useState('Deepti')

  //set of array
//   const [users, setUsers] = useState([10,20,30])

//   function changeNum(){
//     setNum(30)
//     setUsername('Shivesh')
//     setUsers([50,60,70])
//   }

//   return (
//     <div>
//       <h1>Value of num is {num} <br /> </h1>
//       <h1>value of user is {username} <br /> </h1>
//       <h1>Value of users is {users}  </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

import React , {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(2)

  function increaseNum(){
    setNum(num + 1)
  }

  function decreaseNum(){
    setNum(num - 1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App
