import React from "react";

const Task = ({ taskItem, setTaskItem, todo, setTodo }) => {
  const textChangeHandle = (e) => {
    setTaskItem(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // add empty case scenario
    // if (taskItem === "") console.log("Emoty");
    setTodo([
      ...todo,
      {
        task: taskItem,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);

    setTaskItem("");
  };

  return (
    <div className="container">
      <form>
        <input
          value={taskItem}
          onChange={textChangeHandle}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Task;
