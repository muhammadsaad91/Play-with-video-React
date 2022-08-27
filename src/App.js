import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./index.css"


const App = () => {
  const [play , setPlay] = useState("Play");
  const inputRef = useRef();
  

  const click = () => {

    if (play === "Play") {
      setPlay("Pause");
      inputRef.current.play();
    } else {
      setPlay("Play");
      inputRef.current.pause();
    }
  }
  



  return (
    <div className="main">
      <button onClick={click}>{play}</button>

      <video ref={inputRef}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4"  type="video/mp4" />
      </video>
    </div>
  );
}

export default App;


