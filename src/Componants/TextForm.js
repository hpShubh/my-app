import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handalUpperclick = () => {
 
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handalonChange = (event) => {
   
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text here : ");
  return (
    <div>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="formbox"
          value={text}
          onChange={handalonChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handalUpperclick}>
        Convert to Uppercase
      </button>
      <div className="container">
        <h2>Your text summa</h2>
      </div>
    </div>
  );
}
