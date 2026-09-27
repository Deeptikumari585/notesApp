import React from 'react'

function Card (props)  {
    console.log(props);
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1626761191814-a9dc9efd085c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="future" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <button>View profile</button>
      </div>
      
  )
}

export default Card
