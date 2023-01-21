import React from 'react';
import { Context, useContext } from 'react';


const CartPizza = (probs) => {
  const { pizza } = probs;
  const { incremento, decremento, eliminarPizza } = useContext(Context);
 
  return (
    <div className="name">
      <img className="desc" src={pizza.image} alt={pizza.name} />
      <div className="ingredients">
        <span>
          <h3>{pizza.name}</h3>
          <small>{pizza.image}</small>
        </span>
        <span style={{ display: 'flex' }}>
          <span>
            <b>Precio:</b> $ {pizza.price.toFixed(2)} <br />
          </span>
          {pizza.count > 1 && (
            <>
              <span style={{ marginLeft: '1rem' }}>
                <b>Count: </b>x{pizza.count}
              </span>
              <span style={{ marginLeft: '1rem' }}>
                <b>Total:</b> $ {(pizza.price * pizza.count).toFixed(2)}
              </span>
            </>
          )}
        </span>
        <div>
          <button onClick={() => decremento(pizza)} className="cart-btn">
            {' '}
            -{' '}
          </button>
          <button onClick={() => eliminarPizza(pizza.id)} className="remove-btn">
            Eliminar
          </button>
          <button onClick={() => incremento(pizza)} className="cart-btn">
            {' '}
            +{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPizza;

