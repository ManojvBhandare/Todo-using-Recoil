import { atom, selector } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

export const searchtodoAtom = atom({
  key: "searchtodoAtom",
  default: "",
});

export const filtertodosSelector = selector({
  key: "filtertodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const searchtodo = get(searchtodoAtom);

    return todos.filter(
      (todo) =>
        todo.title.includes(searchtodo) || todo.description.includes(searchtodo)
    );
  },
});
