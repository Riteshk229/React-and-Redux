import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";
const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row mRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mButton"
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
