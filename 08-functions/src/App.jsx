import React from 'react'

const App = () => {

  const pageScrolling = (elem) => {
    if(elem>0){
      console.log('seedha scrolling');
    }else{
      console.log('ulta scrolling');
    }
  }


  return (

      // {/* <button  onClick = {function() {
      //   console.log('Button clicked');
      // }}>Click here</button> */}

      // {/* <input onChange={inputChanging}  type="text" placeholder ='Enter Name' /> */}
      
      // {/* <div onMouseMove={() => {console.log('dance')}} className='box'></div> */}


      <div onWheel={(elem) => {
        pageScrolling(elem.deltaY)
        }}>

        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
    </div>
  )
}

export default App
