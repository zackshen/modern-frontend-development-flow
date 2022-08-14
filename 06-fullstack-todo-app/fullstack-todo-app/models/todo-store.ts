import { Todo, TODO_STATUS } from "../types";
import * as TodoServices from "../services/todos";

type HandlerFn = () => void;

export class TodoStore {
  _store: Todo[];
  _handlers: HandlerFn[];

  constructor() {
    this._store = [];
    this._handlers = [];
  }

  subscribe(handler: HandlerFn) {
    this._handlers.push(handler);
  }

  private _notify() {
    this._handlers.forEach((fn) => fn());
  }

  items() {
    return this._store;
  }

  async addTodo(content: string) {
    const todo = await TodoServices.createTodo(content);
    this._store = [...this._store, todo];
    this._notify();
  }

  async removeTodo(id: string) {
    await TodoServices.removeTodo(id);
    this._store = [...this._store.filter((todo) => todo.id !== id)];
    this._notify();
  }

  async listTodos() {
    const todos = await TodoServices.getTodos();
    this._store = todos;
    this._notify();
  }

  async markTodoStatus(todo: Todo, status: TODO_STATUS) {
    await TodoServices.updateTodo(todo.id, { status });
    this._store = this._store.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          status,
        };
      }
      return item;
    });
    this._notify();
  }
}
