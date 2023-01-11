import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Todo } from "./types";
import todoService from "../services/todos";

interface AppState {
  todos: Array<Todo>;
}

export default function Home() {
  const [todos, setTodos] = useState<AppState["todos"]>([]);

  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
      })
  }, [])

  const handleNewTodo = (todo: Todo): void => {
    setTodos([...todos, todo]);
    const todoObject = {
      text: todo.text,
    }

    todoService
      .create(todoObject)
      .then(returnedTodo => {
        setTodos(todos.concat(returnedTodo))
      })
  };

  const handleDelete = (index: number): void => {
    const newTodos = todos.filter((todo, i) => i !== index);
    const id = todos[index];
    todoService
      .remove(id)
      .then(() => {
        setTodos(newTodos)
      })
  };

  const handleCompleted = (index: number): void => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <main className="bg-[#0f172a] h-screen">
      <div className="flex flex-col w-96 m-auto font-sans text-white space-y-2">
        <h1 className="font-sans text-3xl py-4 font-bold">To-do List</h1>
        <Form onNewTodo={handleNewTodo} />
        <List
          todos={todos}
          onDelete={handleDelete}
          onComplete={handleCompleted}
        />
      </div>
    </main>
  );
}
