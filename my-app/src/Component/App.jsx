import React,{useState} from 'react';


function App() {
  //setInteraval will run the update function after every 1 sec.
  setInterval(updateTime,1000);
   let now = new Date().toLocaleTimeString();
   //Use of useState Hook
   let [time,latesttime] = useState(now);
   
  function updateTime(){
    let newTime = new Date().toLocaleTimeString();
     latesttime(newTime);
  }
  return (
     <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
