import React, { useState } from "react";

const App = () => {
  const [leftVal,setLeftVal] = useState(0);
  const [rightVal,setRightVal] = useState(0);
  // const [leftValouter,setRightValouter] = useState(0)
  return (
    <div className="app" onMouseMove={(e)=>{
      setLeftVal(e.clientY);
      setRightVal(e.clientX);
    }}>
      <div className="circle_outer" style={{position:"absolute" , top:`${leftVal}px`, left:`${rightVal}px`}}>
      <div className="circle">
        
      </div>
      </div>
    </div>
  )
}

export default App;