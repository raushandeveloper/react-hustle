import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
    const todoItems =[
    {
      name: "My Milk",
      dueDate: "24/2/2026",
    },
    {
     name: "Go to College",
     dueDate: "24/2/2026",
    },
    {
      name: "Like this Video",
      dueDate: "right now",
    },
    ];
     return (
    <center className="todo-container">
      <AppName />
      <AddTodo /> 
      <TodoItems todoItems={todoItems}></TodoItems>

    </center>
  );
}

export default App;