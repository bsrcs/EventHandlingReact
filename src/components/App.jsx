import React, { useState } from "react";

function App() {

 const [isMouseOver, setMouseOver] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function updateFName(event){
    const firstName = event.target.value;
    setFName(firstName);
  }
  function updateLName(event){
    const lastName = event.target.value;
    setLName(lastName);
  }

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input
          onChange={updateFName}
          type="text"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={updateLName}
          type="text"
          placeholder="Last Name"
          value={lname}
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
