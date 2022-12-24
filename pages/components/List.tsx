import { Todo } from "../types";

interface Props {
    todos: Array<Todo>
}

export default function List ({todos}: Props) {
    return (
        <ul>
            {
                todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            <span>{todo.text}</span>
                            <span>{todo.description}</span>
                        </li>
                    )
                })
            }
         </ul>
    )
}