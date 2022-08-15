import { TodoStore } from "./todo-store";

const todo = (message: string) => {
  throw new Error(message);
};

jest.mock("../services/todos", () => {
  return {
    getTodos: jest.fn().mockImplementation(() => {
      return Promise.resolve([
        { id: "todo-1", content: "test--01" },
        { id: "todo-2", content: "test--02" },
        { id: "todo-3", content: "test--03" },
      ]);
    }),
  };
});

describe("test store", () => {
  it.only("create store and load data first", async () => {
    const store = new TodoStore();
    const subscribeFn = jest.fn();
    store.subscribe(subscribeFn);
    await store.listTodos();

    expect(subscribeFn).toHaveBeenCalled();

    expect(store.items()).toEqual([
      { id: "todo-1", content: "test--01" },
      { id: "todo-2", content: "test--02" },
      { id: "todo-3", content: "test--03" },
    ]);
  });

  it("add todo", () => {
    todo("implement create todo testcase");
  });

  it("update todo", () => {
    todo("implement create todo testcase");
  });

  it("remove todo", () => {
    todo("implement create todo testcase");
  });
});
