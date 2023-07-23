import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
}
const handleClearClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = " ";
  setText(newText);
}
const handleNumExtract =()=>{
  const regex = /[0-9/ /]/g;

  const digits = text.match(regex);
  const res = digits.join('');
 setText(res)
  };
const handleOnChange = (event)=>{
  // console.log("on change");
  setText(event.target.value)
}
const handleCopy =()=>{
  let text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value)
}
const [text, setText] = useState(' ');

  return (
<>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={ handleNumExtract}>Extract Numbers</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
</div>
<div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}> 
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text: "Enter something in the checkbox above to preview it here"}</p>
</div>
</>
  )
}
