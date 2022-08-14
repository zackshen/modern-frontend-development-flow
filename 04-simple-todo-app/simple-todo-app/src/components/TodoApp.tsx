import { TodoHeader } from "./TodoHeader";
import { TodoItems } from "./TodoItems";
import { TodoFooter } from "./TodoFooter";
import { useCallback, useMemo, useState } from "react";
import { Todo, TODO_STATUS } from "../types";
import { nanoid } from "nanoid";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosState, setTodosState] = useState<TODO_STATUS | "all">("all");
  const addTodoItem = useCallback((content: string) => {
    setTodos((todos: Todo[]) => {
      return [
        ...todos,
        { id: nanoid(), ts: Date.now(), content: content, status: "active" },
      ];
    });
  }, []);

  const removeTodoItem = useCallback((removeTodo: Todo) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== removeTodo.id));
  }, []);

  const markTodoStatus = useCallback((todo: Todo, status: TODO_STATUS) => {
    setTodos((todos: Todo[]) => {
      return todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            status,
          };
        }
        return item;
      });
    });
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
