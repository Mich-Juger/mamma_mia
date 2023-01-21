import React from 'react';
import { ContextCarro, useContext } from "../contexts/ContextCarro";

import PizzaItem from './PizzaItem';


const PizzasList = () => {
  const { state } = useContext(ContextCarro);

  return (
    <div className="list">
      {state.data.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} cart={state.cart} />
      ))}
    </div>
  );
};

export default PizzasList;