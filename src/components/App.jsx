import React, { useState } from "react";

function App() {

 const [isMouseOver, setMouseOver] = useState(false);
 // instead of storing simple value we're storing an object
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  // return fname & lname as an object to see both on heading
  function handleChange(event){
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    
    // instead we can use object destructuring
    const {value, name} = event.object;

    setFullName(prevValue => {
      if(name === "fname"){
        return{
          fname: value,
          lname: prevValue.lname
        };
      }
      else if(name === "lname"){
        return{
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input
          onChange={handleChange}
          name="fname"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleChange}
          name="lname"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >Submit</button>
      </form>
    </div>
  );
}

export default App;
