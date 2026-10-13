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
  let totleSec = Math.floor(elapsed / 1000) > 0 ? Math.floor(elapsed / 1000) : 0;
  let years = Math.floor(totleSec/60/60/24/365)
  let days = Math.floor(totleSec/60/60/24) %365
  let hours = Math.floor(totleSec/60/60) %24
  let min = Math.floor(totleSec / 60) % 60;
  let sec = totleSec % 60;

  let content = `${years}:${String(days).padStart(3, "0")}:${String(hours).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

  return (
    <div className="message">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Message;
