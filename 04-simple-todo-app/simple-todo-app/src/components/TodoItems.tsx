import { Todo, TODO_STATUS } from "../types";

export interface TodoItemsProps {
  value: Todo[];
  onRemoveTodo(todo: Todo): void;
  onMarkTodoComplete(todo: Todo, completed: TODO_STATUS): void;
}

export const TodoItems = (props: TodoItemsProps) => {
  const { value, onRemoveTodo, onMarkTodoComplete } = props;
  return (
    <section className="main">
      <ul className="todo-list">
        {value.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.status === "completed" ? "completed" : ""}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.status === "completed"}
                  onChange={(e) =>
                    onMarkTodoComplete(
                      todo,
                      e.target.checked ? "completed" : "active"
                    )
                  }
                />
                <label>{todo.content}</label>
                <button
                  className="destroy"
                  onClick={() => onRemoveTodo(todo)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
