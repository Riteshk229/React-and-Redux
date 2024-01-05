import { useContext, useRef } from "react";
import { MdOutlineNoteAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddBtnClick = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    if (todoName && dueDate) {
      addNewItem(todoName, dueDate);
    }
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddBtnClick} className="row mRow">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success mButton">
            <MdOutlineNoteAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
