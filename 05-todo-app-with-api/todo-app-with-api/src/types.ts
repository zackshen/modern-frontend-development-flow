export type TODO_STATUS_ACTIVE = "active";
export type TODO_STATUS_COMPLETE = "completed";
export type TODO_STATUS = TODO_STATUS_ACTIVE | TODO_STATUS_COMPLETE;

export type Todo = {
  id: string;
  ts: number;
  content: string;
  status: TODO_STATUS;
};
