import { useState } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";

function AddTodo({ addTodo }) {
  const [todoname, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddBtnClick = () => {
    if (todoname && dueDate) {
      addTodo(todoname, dueDate);
    }
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row mRow">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            value={todoname}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mButton"
            onClick={handleAddBtnClick}
          >
            <MdOutlineNoteAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
