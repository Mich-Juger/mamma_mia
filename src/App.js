import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextCarro } from "./components/ContextCarro";
import Home from './views/Home';
import Detalle from './views/Detalle';
import Carro from './views/Carro';
import NotFound from "./views/NotFound";
import { data } from './data/pizzas';

import './App.css';
import { useState } from "react";


const App = () => {
  const [state, setState] = useState ({
                data: data,
                carro: [],

  });

  return (
    <section className="App">
      <ContextCarro.Provider>
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
