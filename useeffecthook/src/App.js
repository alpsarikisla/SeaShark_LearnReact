
import React, {useState, useEffect } from 'react';
import './App.css';

function App() {
  const[timer, setTimer]= useState(5);

  useEffect(()=>{
    if(timer!==0)
    {
      const interval = setInterval(()=>{
        setTimer(timer - 1);
      },1000);
      document.title = "Sayaç= " + timer;
      return ()=> clearInterval(interval);
    }
    
  })
  return (
    <div className="App">
     <div style={{height:"250px", width:"250px", borderRadius:"50%", backgroundColor:"purple", 
      color:"white",fontSize:"25pt", margin:"10px auto", lineHeight:"250px"}}>{timer}</div>
    </div>
  );
}

export default App;
