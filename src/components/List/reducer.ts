import { moveArrayItem, newMaxId } from "../../utils";

export interface Item {
  name: string;
  id: number;
  isChecked: boolean;
}

interface State {
  toDos: Item[];
  text: string;
}

type Action =
  | { type: "ADD_TODO" }
  | { type: "CLEAR_ALL" }
  | { type: "SET_TEXT"; payload: string }
  | { type: "DELETE_ITEM"; payload: number }
  | { type: "MOVE_DOWN"; payload: number }
  | { type: "MOVE_UP"; payload: number }
  | { type: "TOGGLE_CHECK"; payload: number }
  | {
      type: "EDIT_ITEM";
      payload: {
        id: number;
        newName: string;
      };
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newToDoList: Item[] = [
        ...state.toDos,
        {
          name: state.text,
          // Get the max id so we can always have 1 higher
          id: newMaxId(state.toDos),
          isChecked: false,
        },
      ];

      // We also want an empty input box for the next todo item
      return { ...state, toDos: newToDoList, text: "" };
    }
    case "SET_TEXT": {
      return { ...state, text: action.payload };
    }
    case "EDIT_ITEM": {
      const items = state.toDos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.newName,
          };
        }
        return item;
      });

      return { ...state, toDos: items, text: "" };
    }
    case "DELETE_ITEM": {
      const items = state.toDos.filter(({ id }) => id !== action.payload);

      return { ...state, toDos: items };
    }
    case "MOVE_UP": {
      const index = state.toDos.findIndex((object) => {
        return object.id === action.payload;
      });

      return { ...state, toDos: moveArrayItem(state.toDos, index, index - 1) };
    }
    case "MOVE_DOWN": {
      const index = state.toDos.findIndex((object) => {
        return object.id === action.payload;
      });

      return { ...state, toDos: moveArrayItem(state.toDos, index, index + 1) };
    }
    case "TOGGLE_CHECK": {
      const items = state.toDos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }
        return item;
      });

      return { ...state, toDos: items, text: "" };
    }
    case "CLEAR_ALL": {
      return { ...state, toDos: [] };
    }
    default:
      return state;
  }
};

export default reducer;
