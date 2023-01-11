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
    todoService.getAll().then(initialTodos => {
        setTodos(initialTodos as Todo[]);
    });
}, []);

  const handleNewTodo = (todo: Todo): void => {
    const todoObject = {
      text: todo.text,
      done: false
    }
    todoService
      .create(todoObject)
      .then(returnedTodo => {
        setTodos(prevTodos => prevTodos.concat(returnedTodo as Todo));
      });
  };

  const handleDelete = (index: number): void => {
    const newTodos = todos.filter((todo, i) => i !== index);
    const id = todos[index].id;
 
    todoService
      .remove(id)
      .then(() => {
        console.log("delete")
        setTodos(newTodos)
      })
  };
  const handleCompleted = (index: number) => {
    const todoToUpdate = todos[index];
    const updatedTodo = { ...todoToUpdate, done: !todoToUpdate.done };
    const id = todos[index].id;

    todoService
      .update(id, updatedTodo)
      .then(returnedTodo => {
        console.log("put")
        setTodos(
          todos.map((todo, i) => (i === index ? returnedTodo : todo) as Todo)
        );
      });
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
