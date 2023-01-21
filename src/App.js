
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextCarro } from './contexts/ContextCarro';
import { data } from './data/pizzas';
import Home from './views/Home';
import PizzaItem from './components/PizzaItem.jsx';
import CarroItem from './components/CarroItem';
import NotFound from "./views/NotFound";
import DetallePizzaItem from './views/DetallePizzaItem';

import Navbar from './components/Nabvar';
import './App.css';

const App = () => {
  const [state, setState] = useState ({
                data: data,
                cart: [],

  });
  

  const Añadir = (pizza) => {
    setState({
      ...state,
      cart: state.cart.find((cartPizza) => cartPizza.id === pizza.id)
        ? state.cart.map((cartPizza) =>
            cartPizza.id === pizza.id
              ? { ...cartPizza, count: cartPizza.count + 1 }
              : cartPizza
          )
        : [...state.cart, { ...pizza, count: 1 }],
    });
  };

  
  const incremento = (pizza) => {
    setState({
      ...state,
      cart: state.cart.map((cartPizza) =>
        cartPizza.id === pizza.id
          ? { ...cartPizza, count: cartPizza.count + 1 }
          : cartPizza
      ),
    });
  };

  const decremento = (pizza) => {
    setState({
      ...state,
      cart: state.cart.map((cartPizza) =>
        cartPizza.id === pizza.id
          ? { ...cartPizza, count: cartPizza.count > 1 ? cartPizza.count - 1 : 1 }
          : cartPizza
      ),
    });
  };

  const eliminarPizza = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartPizza) => cartPizza.id !== id),
    });
  };


  return (
    <section className="App">
      <ContextCarro.Provider value={{ state: state, Añadir, incremento, decremento, eliminarPizza }}>
        <BrowserRouter>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pizza/:id" element={<DetallePizzaItem />} />
            <Route path="/carrito" element={<CarroItem />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
                
        </BrowserRouter>
      </ContextCarro.Provider>
    </section>
  );
}

export default App;
