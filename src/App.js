import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextCarro } from "./components/ContextCarro";
import { data } from './data/pizzas';
import Home from './views/Home';
import Detalle from './views/Detalle';
import Carro from './views/Carro';
import NotFound from "./views/NotFound";


import './App.css';
import { useState } from "react";


const App = () => {
  const [state, setState] = useState ({
                data: data,
                carro: [],

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

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pizza/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carro />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
                
        </BrowserRouter>
      </ContextCarro.Provider>
    </section>
  );
}

export default App;
