import React, { useState } from "react";

function App() {

  const [isMouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {

    const { value, name } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" value={contact.fName} placeholder="First Name" />
        <input onChange={handleChange} name="lName" value={contact.lName} placeholder="Last Name" />
        <input onChange={handleChange} name="email" value={contact.email} placeholder="Email" />
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
