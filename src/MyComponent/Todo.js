import React, { useState } from 'react'
//React hook

export default function Todo() {
  const handleUpClick = () => {
    // console.log('Uppercase was Clicked' + text);
    //toUppercase is javascript function
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLowClick = () => {
    // console.log('Uppercase was Clicked' + text);
    //toUppercase is javascript function
    let newtext = text.toLowerCase();
    // alert("converted into lowercase");
    setText(newtext);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const clearOnClick =()=>{
    let newtext= "";
    setText(newtext)
  }
  const copyOnClick=()=>{
    console.log("Text Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const removeOnClick=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(""))
  }
  //setText will be change text component. usestate is variable
  const [text, setText] = useState('');
  return (
    <>
      <div className='container'>
        <div>
          <h1 className='p-3'>Write your text</h1>
          <textarea className='form-control' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary my-3' onClick={handleUpClick}>CONVERT INTO UPPERCASE</button>

        <button className='btn btn-primary my-3 mx-3' onClick={handleLowClick}>convert into lowercase</button>
        <button className='btn btn-primary my-3 mx-2' onClick={clearOnClick}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-2' onClick={copyOnClick}>Copy Text</button>
        <button className='btn btn-primary my-3 mx-2' onClick={removeOnClick}>Remove Space</button>
        
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        {/* text.length is function used of fine the number of characters. */}
        <p> {text.split(" ").length } word and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        {/* text is a varibale and here it's used for text preview. */}
        <h3>Preview</h3>
        <p className='bg-success p-2' placeholder='Text Preview'>{text}</p>
      </div>
    </>

  )
}
