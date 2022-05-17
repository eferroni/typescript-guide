import { combineReducers } from "redux";
import { todosReducer } from "./todos";

export const rootReducers = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
