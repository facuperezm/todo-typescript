import { useReducer } from "react";
import { Todo } from "../types";

const INITIAL_STATE = {
  text: "",
  description: "",
  done: false,
};

interface FormState {
  inputValues: Todo;
}

type FormReducerActions =
  | {
      type: "CHANGE_VALUE";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "CLEAR";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerActions
) => {
  switch (action.type) {
    case "CHANGE_VALUE":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "CLEAR":
      return INITIAL_STATE;
  }
};

const useNewTodoForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewTodoForm;
