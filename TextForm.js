import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    
    let newText = '';
    setText(newText)
  }
  const handleOnChange = (event)=>{
   setText(event.target.value)
  }
  const [text, setText] = useState('Enter text here2');//Made state usestate hook set state function to update text function
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      
    <div className="mb-3">
      <textarea
        className="form-control"
        onChange={handleOnChange}//so that i can type in the text after change
        value={text}//text in the area
        id="MyBox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{(text.split(" ").length)-1} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  
  );
}
