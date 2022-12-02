import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Upper case", 'success')
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lower case", 'success')
  }; 
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text has been clear', 'warning')
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("text has been copy", 'success')
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleReverseClick = () => {
    // string to array
    let StrArr = text.split("");
    // reverse
    StrArr = StrArr.reverse();
    // arry to string
    let newText = StrArr.join("");
    setText(newText);
  }; 

  const handleFirstLetterUppercase = () => {
    function capitalLetter(str){
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(' ').map(capitalLetter).join(' ')
    setText(upper)
  }

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#42743'}} rows="10"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert in uppercase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLwClick}> Convert in Lowercase</button>
      <button className="btn btn-info mx-2" onClick={handleReverseClick}>Reverse</button>
      <button className="btn btn-warning mx-2" onClick={handleFirstLetterUppercase}>FirstCap</button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-secondary mx-2" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'grey':'white'}}>
      <h2>Your text Summery</h2>
      <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
