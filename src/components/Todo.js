import TaskItem from "./TaskItem";

const Todo = ({ todo, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((item) => (
          <TaskItem task={item.task} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
