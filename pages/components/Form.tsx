import { useState } from "react";
import { Todo } from "../types";

interface FormState {
    inputValues: Todo
}

interface FormProps {
    onNewTodo: (todo: Todo) => void
}


const Form = ({onNewTodo}: FormProps) => {
    const [inputValue, setInputValue] = useState<FormState["inputValues"]>({
        text: "",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewTodo(inputValue);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="flex flex-col justify-center" onSubmit={handleSubmit} action="submit">
            <input onChange={handleChange} value={inputValue.text} type="text" placeholder="Do my homework" className="border border-gray-400 p-2 rounded-lg" name="text"/>
            <textarea onChange={handleChange} value={inputValue.description} placeholder="Because it is due tomorrow" className="border border-gray-400 p-2 rounded-lg" name="description"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
    )
}

export default Form