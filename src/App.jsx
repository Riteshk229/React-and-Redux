import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
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
    {
      name: "Apply for job",
      dueDate: "5-10-2023",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (todoname, duedate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: todoname, dueDate: duedate },
    ]);
  };

  const handleDeleteItem = (todoName) => {
    setTodoItems((currentValue) =>
      currentValue.filter((item) => item.name !== todoName)
    );
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addTodo={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} deleteTodo={handleDeleteItem} />
    </center>
  );
}

export default App;
