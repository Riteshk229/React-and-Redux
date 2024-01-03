const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div className="container">
      <div className="row mRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mButton">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
