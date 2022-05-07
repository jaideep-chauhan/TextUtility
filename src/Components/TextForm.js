import React,{useState} from 'react';



const TextForm = (props) => {
    const[text,setText]=useState("Enter text here");
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
        
    }
    const handleClearText=()=>{
        console.log("Uppercase was clicked" + text);
        
        setText(null)
        
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
        </div>
        <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-primary' onClick={handleLowClick} >Convert to Lowercase</button>
        <button className='btn btn-primary' onClick={handleClearText} >ClearText</button>
      </div>
    );
}


export default TextForm;