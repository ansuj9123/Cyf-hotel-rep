import React, {useState} from "react";

import RestaurantButton from "./RestaurantButton";
 import "../src/css/Style.css";
 import Order from "./Order";

const Restaurant = () => {
const [order, setOrders] = useState(0);


function orderOne(){
setOrders(order+1);

} 
  return (
    <div>
      {order}
      <RestaurantButton restaurantOrder={orderOne}/>
      <Order food1="salad" food2="chocolate"/>
    </div>
  );
};

export default Restaurant;
