import React from 'react';
import { ContextCarro, useContext } from "../contexts/ContextCarro";


const PizzaItem = (probs) => {
  const { Añadir } = useContext(ContextCarro);

  const { pizza, cart } = probs;

  return (
    <div className="name">
      <img className="desc" src={pizza.img} alt={pizza.name} />
      <div className="ingredients">
        <span>
          <h3>{pizza.name}</h3>
          <small>{pizza.desc}</small>
        </span>
        <span>
          <b>Price:</b> ₺ {pizza.price}
        </span>
        <div>
          <button className="add-btn" onClick={() => Añadir(pizza)}>
            Añadir
          </button>
          {cart.map((cartPizza) =>
            cartPizza.id === pizza.id ? (
                cartPizza.count > 0 ? (
                <span style={{ marginLeft: '5px' }}>
                  {' '}
                  ({cartPizza.count} in the shopping cart){' '}
                </span>
              ) : null
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;