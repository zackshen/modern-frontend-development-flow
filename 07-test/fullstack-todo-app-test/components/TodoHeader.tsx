import React from "react";
import { useRef } from "react";

export interface TodoHeaderProps {
  onAddItem(content: string): void;
  markAllCompleted(completed: boolean): void;
}

export const TodoHeader = (props: TodoHeaderProps) => {
  const { markAllCompleted } = props;
  const inputRef = useRef<HTMLInputElement>();
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      const inputValue = (e.target?.value ?? "").trim();
      if (inputValue === "") {
        return;
      }
      props.onAddItem(inputValue);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        data-testid="todo-content-input"
        ref={inputRef}
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
      <input
        data-testid="markall-complete"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => markAllCompleted(e.target.checked)}
      ></input>
      <label htmlFor="toggle-all">Mark all as complete</label>
    </header>
  );
};
