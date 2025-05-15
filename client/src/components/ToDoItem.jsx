import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ToDoItem(props) {
  const [done, setDone] = useState(false);

  function handleClick() {
    props.onChecked(props.id);
  }

  function completed() {
    setDone(true);
  }

  function notFinished() {
    setDone(false);
  }

  return (
    <div className="todoItem">
      <li>
        <CheckCircleIcon onClick={handleClick} />
        <p
          onClick={done ? notFinished : completed}
          style={{ textDecoration: done ? "line-through" : "none" }}
        >
          {props.text}
        </p>
      </li>
    </div>
  );
}

export default ToDoItem;
