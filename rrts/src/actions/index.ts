import axios from "axios";
import { ActionTypes } from "./types";
import { Action, Dispatch } from "redux";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos =
  (): any =>
  async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodoAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
