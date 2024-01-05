import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todoItemsStore";

function App() {
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
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (todoname, duedate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: todoname, dueDate: duedate },
    ]);
  };

  const deleteItem = (todoName) => {
    setTodoItems((currentValue) =>
      currentValue.filter((item) => item.name !== todoName)
    );
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
