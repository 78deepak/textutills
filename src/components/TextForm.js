import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase","success");
  }
  const handleclearClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = '';
    setText(newtext);
    props.showAlert("clear text","success");
  }

  const handleextraspace = () =>{
    console.log("spacing removed was clicked");
    let newtext = text.replace(/\s+/g, " ");
    setText(newtext);
    props.showAlert("Remove all extra spaces","success");

  }
  // const handleOnClick = (event)=>{
  //     console.log("Uppercase was clicked");
  //     setText("you have clicked on handleUp clicked");
  // }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }



  const [text, setText] = useState('Enter the text hear');
  return (
  <>
    <div className="container w-75" style={{color: props.mode==='dark'?'white':'#042743'}} >
      <div className="mb-3">
        <h2>{props.heading }</h2>
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'white',color:  props.mode==='white'?'black':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lover case</button>
      <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear</button>
      <button className="btn btn-primary mx-1" onClick={handleextraspace}>Remove extra spaces</button>
    </div>
    <div className="container w-75 my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h3>Your Text summary</h3>
    <p>{text.split(" ").length} words and {text.length}character </p>
    <p>{0.008 * text.split(" ").length }minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"enter something in the text box above to preview it hear"}</p>
    </div>
   
    </>
  )
}
