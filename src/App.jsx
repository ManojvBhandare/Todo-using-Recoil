import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { filtertodosSelector, searchtodoAtom, todosAtom } from "./store/store";
function App() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [search, setSearch] = useRecoilState(searchtodoAtom);

  const filtertodos = useRecoilValue(filtertodosSelector);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodos([
              ...todos,
              {
                key: todos.length + 1,
                title: title,
                description: description,
              },
            ]);
            console.log(todos);
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <h2>Search todo</h2>
        <input
          type="text"
          placeholder="enter to search"
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <div>
            {filtertodos.map((x) => (
              <div key={x.key}>
                <h3>{x.title}</h3>
                <p>{x.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h1>Todos</h1>
        {todos.map((todo) => (
          <div key={todo.key}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
