import React, { useEffect, useState } from "react";
import { fetchTodos, Todo, deleteTodo } from "../actions";
import { useAppDispatch, useAppSelector } from "../hooks";

interface AppState {
  fetching: boolean;
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const todos = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    if (!todos) return;
    setTimeout(() => setLoading(false), 1000);
  }, [todos]);

  const onDeleteTodo = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const renderList = (): JSX.Element[] => {
    return todos?.slice(0, 10).map((todo: Todo) => (
      <div
        key={todo.id}
        style={{ cursor: "pointer", margin: "10px 0" }}
        onClick={() => onDeleteTodo(todo.id)}
      >
        {todo.title}
      </div>
    ));
  };

  return <div>{loading ? <div>Loading...</div> : renderList()}</div>;
};

export default App;
