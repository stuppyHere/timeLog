import React, { useState, useEffect } from "react";
import Message from "./Message";
import Button from "./Button";

function InputBox() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [timerLog, setTimerLog] = useState(() => {
    const saved = localStorage.getItem("allTimer");
    return saved ? JSON.parse(saved) : [];
  });

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function startTimer() {
    let timerTitle = title ? title : "Unknown";
    let newStart = input ? new Date(input) : new Date();
    let newTimer = {
      id: crypto.randomUUID(),
      timerName: timerTitle,
      starting: newStart,
    };
    let updatedTimerLog = [...timerLog, newTimer];
    setTimerLog(updatedTimerLog);
    document.querySelector("#timer-title").value = "";
    document.querySelector("#start-time").value = "";
    setTitle("");
    setInput("");
    localStorage.setItem("allTimer", JSON.stringify(updatedTimerLog));
  }

  function deleteTimer(){
    let timerTitle = title ? title : noDeleteError;
    let deleteElement = {

    }
  }

  function noDeleteError(){
    console.log("no timer with that name")
  }

  return (
    <>
      <div className="time-log">
        <div className="input-container">
          <input
            type="text"
            id="timer-title"
            placeholder="Unknown"
            onChange={handleTitleChange}
          />
          <input
            type="datetime-local"
            className="input-box"
            id="start-time"
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <Button
            userFuntion={startTimer}
            nameForButton="start"
            id="start-btn"
          />
          <Button userFuntion={deleteTimer} nameForButton="delete" />
        </div>
        <div className="timer-container">
          {/* <Message starting={input} name={title} /> */}
          {timerLog.map((details) => (
            <Message
              key={details.id}
              starting={details.starting}
              title={details.timerName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default InputBox;
