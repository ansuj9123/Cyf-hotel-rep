import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>orders: {orders} </li>
        <li>order: {props.food1}</li>
        <li>order: {props.food2}</li>
      </ul>

      <RestaurantButton restaurantOrder={orderOne} />
    </div>
  );
};

export default Order;
