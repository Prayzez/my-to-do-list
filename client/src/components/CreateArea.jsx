import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    const textarea = document.getElementById("ToDoText");
    if (inputText.length > 0) {
      textarea.style.border = "0.5mm solid #879cdb";
      textarea.placeholder = "What's on your To-Do list?";
      props.onAdd(inputText);
      setInputText("");
    } else {
      textarea.placeholder = "Please enter your To-Do first!";
      textarea.style.border = "0.5mm solid red";
    }
  }

  return (
    <div className="form">
      <textarea
        id="ToDoText"
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="What's on your To-Do list?"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default CreateArea;
