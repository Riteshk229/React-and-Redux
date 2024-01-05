import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.todoname, dueDate: action.payload.duedate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name != action.payload.todoname
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4-10-2023",
    },
    {
      name: "Go to  College",
      dueDate: "4-10-2023",
    },
  ];

  const [todoItems, dispatchTodoItem] = useReducer(
    todoItemsReducer,
    initialTodoItems
  );

  const addNewItem = (todoname, duedate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { todoname, duedate },
    };

    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (todoname) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { todoname },
    };

    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
