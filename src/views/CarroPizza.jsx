import React from 'react';
import { useContext } from "react";
import { ContextCarro } from "../components/ContextCarro";



const Cart = () => {
  const { state } = useContext(ContextCarro);

  return (
    <div className="cart">
      {state.cart.map((pizza) => (
        <cartPizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Cart;