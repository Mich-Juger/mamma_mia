import React from 'react';
import { ContextCarro, useContext } from "../contexts/ContextCarro";
import CarroItem from '../components/CarroItem';



const DetalleCarroPizza = () => {
  const { state } = useContext(ContextCarro);


  return (
    <div className="detallecompra">
      {state.cart.map((pizza) => (
        <CarroItem key={pizza.id} pizza={pizza} />
      ))}
    </div>

  );
};

export default DetalleCarroPizza;