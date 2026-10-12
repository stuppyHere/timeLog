import React, { useState, useEffect } from "react";

function Message({ starting ,title="Unknown"}) {
  let currentTimer = starting ? new Date(starting) : new Date();
  let [elapsed, setElapsed] = useState(new Date() - currentTimer);

  useEffect(() => {
    let interval = setInterval(() => {
      setElapsed(new Date() - currentTimer);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  let totleSec = Math.floor(elapsed / 1000);
  let min = Math.floor(totleSec / 60);
  let sec = totleSec % 60;

  let content = `${min}:${sec}`;

  return (
    <div className="message">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Message;
