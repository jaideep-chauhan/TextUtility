import React, { useState } from "react";


const TextForm = (props) => {
    const[text,setText]=useState("Enter text here");
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into Capital form", "Success");

    }
    const handleLowClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted into lower form", "Success");
        
    }
    const handleClearText=()=>{
        console.log("Uppercase was clicked" + text);
        
        setText("");
        props.showAlert("Text cleared", "Success");
        
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    return (
        <div className="container my-3">
            <h1 style={props.myStyle}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={props.myStyle} value={text} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
        </div>
        <div className='mx-1'>
        <button className='btn btn-primary mx-1' onClick={handleLowClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearText} >ClearText</button>
        </div>
        <h2 className='my-3' style={props.myStyle}>Your Text Summary</h2>
        <p style={props.myStyle}>{text.length} Characters & {text.split(/\s+/).length} Words</p>
        <h3 style={props.myStyle}>Preview</h3>
        <p style={props.myStyle}>{text}</p>
      </div>
      
    );
}


export default TextForm;