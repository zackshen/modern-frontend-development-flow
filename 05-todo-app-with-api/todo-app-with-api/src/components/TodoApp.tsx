import { TodoHeader } from "./TodoHeader";
import { TodoItems } from "./TodoItems";
import { TodoFooter } from "./TodoFooter";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Todo, TODO_STATUS } from "../types";
import { nanoid } from "nanoid";
import { TodoStore } from "../models/todo-store";

export const TodoApp = () => {
  const store = useRef(new TodoStore());
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosState, setTodosState] = useState<TODO_STATUS | "all">("all");
  const addTodoItem = useCallback((content: string) => {
    store.current.addTodo(content);
  }, []);

  const removeTodoItem = useCallback((removeTodo: Todo) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== removeTodo.id));
    store.current.removeTodo(removeTodo.id);
  }, []);

  const markTodoStatus = useCallback((todo: Todo, status: TODO_STATUS) => {
    store.current.markTodoStatus(todo, status);
  }, []);

  const showActiveTodos = useCallback(() => {
    setTodosState("active");
  }, []);
  const showAllTodos = useCallback(() => {
    setTodosState("all");
  }, []);
  const showCompletedTodos = useCallback(() => {
    setTodosState("completed");
  }, []);

  const uncompleteTodoItems = todos.filter(
    (todo) => todo.status === "active"
  ).length;

  const currentStateTodos = useMemo(() => {
    if (todosState === "active") {
      return todos.filter((todo) => todo.status === "active");
    } else if (todosState === "completed") {
      return todos.filter((todo) => todo.status === "completed");
    } else {
      return todos;
    }
  }, [todosState, todos]);

  const markAllCompleted = useCallback((completed: boolean) => {
    setTodos((todos: Todo[]) => {
      return todos.map((todo) => ({
        ...todo,
        status: completed ? "completed" : "active",
      }));
    });
  }, []);

  const clearCompleted = useCallback(() => {
    setTodosState("all");
    setTodos((todos: Todo[]) => {
      return todos.map((todo) => ({ ...todo, status: "active" }));
    });
  }, []);

  useEffect(() => {
    store.current.listTodos();
    store.current.subscribe(() => {
      setTodos(store.current.items());
    });
  }, []);

  return (
    <div className="todoapp">
      <TodoHeader
        onAddItem={addTodoItem}
        markAllCompleted={markAllCompleted}
      ></TodoHeader>
      <TodoItems
        value={currentStateTodos}
        onRemoveTodo={removeTodoItem}
        onMarkTodoComplete={markTodoStatus}
      ></TodoItems>
      <TodoFooter
        currentState={todosState}
        uncompleteTodoItems={uncompleteTodoItems}
        showActiveTodos={showActiveTodos}
        showAllTodos={showAllTodos}
        showCompletedTodos={showCompletedTodos}
        clearCompleted={clearCompleted}
      ></TodoFooter>
    </div>
  );
};
