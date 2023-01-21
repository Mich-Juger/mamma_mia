import React from 'react';
import { Navigate, useNavigate } from "react-router";
import { ContextCarro, useContext } from "../contexts/ContextCarro";


const PizzaItem = (probs) => {
  const { Añadir } = useContext(ContextCarro);
  const navigate = useNavigate();
  const verMas = (e) => {
    navigate(`/pizza/${e.target.dataset.pizzaid}`);
  };
  

  const { pizza, cart } = probs;

  return (
    <div className="name">
      <img className="ingredients" src={pizza.img} alt={pizza.name} />
      <div className="price">
        <span>
          <h3>{pizza.name}</h3>
          <small>{pizza.ingredients}</small>
        </span>
        <span>
          <b>Price:</b> $ {pizza.price}
        </span>

        
        <div>
          <button className="add-btn" onClick={() => Añadir(pizza)}>
            Añadir
          </button>
          <button className="add-btn" data-pizzaid={pizza.id} onClick={(e) => verMas(e)}>
          Ver más
          </button>
          {cart.map((cartPizza) =>
            cartPizza.id === pizza.id ? (
                cartPizza.count > 0 ? (
                <span style={{ marginLeft: '5px' }}>
                  {' '}
                  ({cartPizza.count} undidad){' '}
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