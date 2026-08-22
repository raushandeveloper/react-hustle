import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessege from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

  const [todoItems, setTodoItems] = useState([
    { name: "Buy Ghee", dueDate: "Today" }
  ]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      item => item.name !== todoItemName
    );

    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <center className="todo-container">

        <AppName />

        <AddTodo onNewItem={handleNewItem} />

        <WelcomeMessege />

        <TodoItems
          onDeleteClick={handleDeleteItem}
        />

      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;