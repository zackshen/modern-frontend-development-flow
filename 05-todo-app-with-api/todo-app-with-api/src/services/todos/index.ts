import axios from "axios";
import { Todo } from "../../types";

export const getTodos = async <T extends Todo>() => {
  return await axios.get<T[]>("/todos/").then((resp) => resp.data);
};

export const createTodo = async <T extends Todo>(content: string) => {
  return await axios.post<T>(`/todos/`, { content }).then((resp) => resp.data);
};

export const getTodo = async <T extends Todo>(id: string) => {
  return await axios.get<T>(`/todos/${id}`).then((response) => response.data);
};

export const removeTodo = async <T extends Todo>(id: string) => {
  return await axios.delete(`/todos/${id}`).then((resp) => resp.data);
};

export const updateTodo = async <T extends Todo>(
  id: string,
  data: Record<string, any>
) => {
  return await axios.put(`/todos/${id}`, data).then((resp) => resp.data);
};
