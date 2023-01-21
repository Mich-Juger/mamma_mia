import React from 'react';
import { Context, useContext } from 'react';

const Detalle = (probs) => {
  const { Añadir } = useContext(Context);

  const { pizza, cart } = probs;

  return (
    <div className="name">
      <img className="desc" src={pizza.image} alt={pizza.name} />
      <div className="ingredients">
        <span>
          <h3>{pizza.name}</h3>
          <small>{pizza.author}</small>
        </span>
        <span>
          <b>Pricio:</b> ₺ {pizza.price}
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

export default Detalle;