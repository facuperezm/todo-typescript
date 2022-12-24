import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"
import { Todo } from "./types"
interface AppState {
  todos: Array<Todo> 
}

  const INITIAL_STATE = [
    {
    name: "Bake a bread",
    description: "Bake a bread for the family",
    completed: false,
  }, 
  {
    name: "Bake a bread",
    description: "Bake a bread for the family",
    completed: false,
  },
  {
    name: "Bake a bread",
    description: "Bake a bread for the family",
    completed: false,
  },
]

export default function Home() {
  const [todos, setTodos] = useState<AppState["todos"]>([])

  const handleNewTodo = (todo: Todo):void => {
    setTodos([...todos, todo])
  }

  return (
    <>
    <div>
      <h1 className="font-bold text-3xl">To-do List</h1>
      <List todos={todos}/>
      <Form onNewTodo={handleNewTodo}/>
    </div>
    </>
  )
}
