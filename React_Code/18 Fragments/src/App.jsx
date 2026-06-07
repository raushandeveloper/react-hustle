import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  // let foodItems = [];
  let foodItems = ["sabzi","Green Vegetable","Roti","Salad","Milk","Ghee"];
  return (
  <React.Fragment>
  <h1 className="food-heading">Healthy Food</h1>
  <ErrorMessage items={foodItems}></ErrorMessage>
    {/* {foodItems.length === 0 && <h3>I am still hungry.</h3>} */}
   <FoodItems items={foodItems}></FoodItems>
  </React.Fragment>
  );
}

export default App;