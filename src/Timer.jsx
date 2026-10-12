  import React, { useState, useEffect } from "react";

  function Timer({starting}) {
    let currentTimer =starting? new Date(starting) : new Date();
    let [elapsed, setElapsed] = useState(new Date() - currentTimer);

    useEffect(() => {
      let interval = setInterval(() => {
        setElapsed(new Date()-currentTimer);
      }, 10);
      return () => clearInterval(interval);
    }, []);
  let totleSec = Math.floor(elapsed/1000)
    let min = Math.floor(totleSec/60) 
    let sec = totleSec % 60

    let content = `${min}:${sec}`;

    return (
      <div>
        <p>{content}</p>
      </div>
    );
  }

  export default Timer;
