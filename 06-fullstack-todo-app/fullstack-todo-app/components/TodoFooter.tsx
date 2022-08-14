import { useState } from "react";

export interface TodoFooterProps {
  uncompleteTodoItems: number;
  currentState: string;
  showActiveTodos(): void;
  showAllTodos(): void;
  showCompletedTodos(): void;
  clearCompleted(): void;
}

export const TodoFooter = (props: TodoFooterProps) => {
  const {
    currentState,
    uncompleteTodoItems,
    showActiveTodos,
    showAllTodos,
    showCompletedTodos,
    clearCompleted,
  } = props;
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{uncompleteTodoItems}</strong>
        <span> </span>
        <span>item</span>
        <span> left</span>
      </span>

      <ul className="filters">
        <li onClick={showAllTodos}>
          <a href="#/" className={currentState === "all" ? "selected" : ""}>
            All
          </a>
        </li>
        <span> </span>
        <li onClick={showActiveTodos}>
          <a
            href="#/active"
            className={currentState === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <span> </span>
        <li onClick={showCompletedTodos}>
          <a
            href="#/completed"
            className={currentState === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};
