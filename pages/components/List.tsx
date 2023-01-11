import { Todo } from "../types";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { v4 as uuidv4 } from 'uuid';
interface Props {
  todos: Array<Todo>;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

export default function List({ todos, onDelete, onComplete }: Props) {
  return (
    <ul>
      {todos?.map((todo, index) => {
        return (
          <li
            className={`text-lg bg-gray-200 p-1 rounded-md text-black ${
              todo.done ? "line-through" : ""
            } flex justify-between my-2`}
            key={uuidv4()}
          >
            <button onClick={() => onComplete(index)}>{todo.done ? <MdDone/> : <RxCross2/> }</button>
            <div className="flex flex-col flex-1 px-2">
              <span>{todo.text}</span>
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
