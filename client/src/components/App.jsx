import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToDoItem from "./ToDoItem";
import CreateArea from "./CreateArea";

function App() {
  const [toDos, setToDos] = useState([]);

  function addToDo(newToDo) {
    setToDos((prevToDo) => {
      return [...prevToDo, newToDo];
    });
  }

  function deleteToDo(id) {
    setToDos((prevToDo) => {
      return prevToDo.filter((toDoItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <CreateArea onAdd={addToDo} />
        <div className="list-container">
          <ul>
            {toDos.map((toDoItem, index) => {
              return (
                <ToDoItem
                  key={index}
                  id={index}
                  text={toDoItem}
                  onChecked={deleteToDo}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
