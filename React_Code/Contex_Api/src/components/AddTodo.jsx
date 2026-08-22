import {useRef} from "react";
import styles from "./AddTodo.module.css";
import {BiMessageAdd} from 'react-icons/bi';

function AddTodo({onNewItem}) { 
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
    return <div className="container text-center">
          <div className="row kg-row">
          <div className="col-6">
            <input className={styles.size}  type="text" ref={todoNameElement} placeholder="Enter Todo Here"/>
          </div>
          <div className="col-4">
            <input className={styles.size} type="date" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
            onClick={handleAddButtonClicked }>
              <BiMessageAdd/>
              </button>
          </div>
        </div>
       </div> 
}

export default AddTodo;