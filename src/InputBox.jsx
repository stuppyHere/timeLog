import React, { useState, useEffect } from "react";
import Message from "./Message";
import Button from "./Button";

function InputBox() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  /*  const year = currentTime.getFullYear();
  const month = String(currentTime.getMonth() + 1).padStart(2, "0");
  const day = String(currentTime.getDate()).padStart(2, "0");
  const hour = String(currentTime.getHours()).padStart(2, "0");
  const min = String(currentTime.getMinutes()).padStart(2, "0");
  const sec = String(currentTime.getSeconds()).padStart(2, "0"); */
  // const time = `${year}-${month}-${day} ||${hour}:${min}:${sec}`;
  const time = currentTime;

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  return (
    <>
      <div className="time-log">
        <div className="input-container">
          <input type="text" id="timer-title" placeholder="Unknown" onChange={handleTitleChange} />
          <input
            type="datetime-local"
            className="input-box"
            id="start-time"
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <Button nameForButton="start" />
          <Button nameForButton="stop" />
          <Button nameForButton="delete" />
        </div>
        <div className="timer-container">
          <Message starting={input} name={title} />
        </div>
      </div>
    </>
  );
}

export default InputBox;
