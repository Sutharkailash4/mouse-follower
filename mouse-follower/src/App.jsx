import React, { useState } from "react";

const App = () => {
  const [leftVal,setLeftVal] = useState(200);
  const [rightVal,setRightVal] = useState(0);
  return (
    <div className="app" onMouseMove={(e)=>{
      setLeftVal(e.clientY);
      setRightVal(e.clientX);
    }}>
      <div style={{position:"absolute" ,top:`${leftVal}px` ,left:`${rightVal}px`}} className="circle">
        
      </div>
    </div>
  )
}

export default App;