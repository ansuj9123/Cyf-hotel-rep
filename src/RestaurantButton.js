import React from "react";
import Order from "./Order";

import "../src/css/Style.css";
function RestaurantButton(props) {
  return (
    <div id="button-moving">
      <button onClick={props.restaurantOrder} className="btn btn-primary">
        Add
      </button>
      
     
    </div>
  );
}
export default RestaurantButton;
