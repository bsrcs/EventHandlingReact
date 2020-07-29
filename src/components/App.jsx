import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setMouseOver] = useState(false); 
  const [name, setName] = useState("");

  function handleClick(event){
    setHeadingText(name);
    event.preventDefault();
  }

  function handleMouseOver(){
    setMouseOver(true);
  }

  function handleMouseOut(){
    setMouseOver(false);
  }

  // "event" objekti onChange'i trigger eder.
  // "target" the element that triggered this "event".
  // value corresponds to value of attributes.
  function handleChange(event){
    //console.log(event.target.value);
    setName(event.target.value);
  }

// input elementi ne zaman "onChange"de store edilen "handleChange" fonk.ununu trigger ediyor?

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?"
      value={name}
       />
      <button 
      style = {{backgroundColor: isMouseOver? "black": "white"}}
      onMouseOver={handleMouseOver} 
      onMouseOut ={handleMouseOut}
      >Submit</button>
      </form>
    </div>
  );
}

export default App;
