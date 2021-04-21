import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Todo from "./components/Todo";

function App() {
  const [taskItem, setTaskItem] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <header>To Do List</header>
      <Task
        todo={todo}
        setTodo={setTodo}
        taskItem={taskItem}
        setTaskItem={setTaskItem}
      />
      <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
