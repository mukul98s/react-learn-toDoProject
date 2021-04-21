import React from "react";
const TaskItem = ({ task, item, todo, setTodo }) => {
  const deleteHandler = () => {
    setTodo(
      todo.filter((element) => {
        return element.id !== item.id;
      })
    );
  };

  const completeHandler = () => {
    setTodo(
      todo.map((element) => {
        if (element.id === item.id)
          return {
            ...item,
            completed: !item.completed,
          };
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        {task}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TaskItem;
