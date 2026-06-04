function TodoItem2(){
    let todoname = "Go to College";
    let TodoDate = "24/2/2026";

    return (
    <div className="container">
        <div className="row kg-row">
          <div className="col-6">
           {todoname}
          </div>
          <div className="col-4">
            {TodoDate}
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">Add</button>
          </div>
        </div>
    </div>
    );
}

export default TodoItem2;