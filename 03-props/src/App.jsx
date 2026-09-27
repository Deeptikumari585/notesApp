import React from 'react'
import Card from './components/card'

const App = () => {
  return (
      <div className="parent">
        <Card user = 'Deepu' age={18} />
        <Card user = 'Deepti' age={23} />
      
      </div>
  )
}
export default App
