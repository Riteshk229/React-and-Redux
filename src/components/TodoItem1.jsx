function TodoItem1() {
  let todoName = "BuyMilk";
  let todoDate = "4/10/2023";
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
}

export default TodoItem1;
