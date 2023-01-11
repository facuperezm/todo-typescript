import { useState } from "react";
import { Todo } from "../types";
interface FormProps {
  onNewTodo: (todo: Todo) => void;
}

interface FormState {
  inputValues: Todo;}

const Form = ({ onNewTodo }: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState["inputValues"]>({
    text: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewTodo(inputValue);
    setInputValue({
      text: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
      });
  };


  return (
    <form
      className="flex flex-col justify-center space-y-1"
      onSubmit={handleSubmit}
      action="submit"
    >
      <input
        onChange={handleChange}
        value={inputValue.text}
        type="text"
        placeholder="Do my homework"
        className="border border-gray-400 p-2 rounded-lg text-black"
        name="text"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
