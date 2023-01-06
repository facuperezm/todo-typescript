import { Todo } from "../types";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  todos: Array<Todo>;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

export default function List({ todos, onDelete, onComplete }: Props) {
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);

  const handleComplete = (index: number) => {
    onComplete(index);
    setCompletedIndices((prevCompletedIndices) =>
      prevCompletedIndices.includes(index)
        ? prevCompletedIndices.filter((i) => i !== index)
        : [...prevCompletedIndices, index]
    );
  };

  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li
            className={`text-lg bg-gray-200 p-1 rounded-md text-black ${
              completedIndices.includes(index) ? "line-through" : ""
            } flex justify-between my-2`}
            key={index}
          >
            <input
              type="checkbox"
              onClick={() => handleComplete(index)}
              checked={completedIndices.includes(index)}
            />
            <div className="flex flex-col flex-1 px-2">
              <span>{todo.text}</span>
              <span className="text-sm">{todo.description}</span>
            </div>
            <button onClick={() => onDelete(index)}>
              <AiFillDelete />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
