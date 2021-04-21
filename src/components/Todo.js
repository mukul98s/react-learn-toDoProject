import TaskItem from "./TaskItem";

const Todo = ({ todo, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((item) => (
          <TaskItem
            todo={todo}
            setTodo={setTodo}
            task={item.task}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
