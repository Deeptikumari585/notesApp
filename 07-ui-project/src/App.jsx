import React from 'react'

import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {

  const users = [

    {
      img: 'https://images.unsplash.com/photo-1770947147650-fab067b8d33b?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underserved'

    },
    {
      img: 'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'pink',
      tag: 'Underbanked'

    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
