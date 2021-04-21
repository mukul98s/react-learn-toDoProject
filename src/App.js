import "./App.css";
import Task from "./components/Task";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: "center" }}>To Do List</header>
      <Task />
      <Todo />
    </div>
  );
}

export default App;
