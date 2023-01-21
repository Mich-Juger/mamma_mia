import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextCarro, useContext } from "../contexts/ContextCarro";


const DetallePizzaItem = () => {
    const { state } = useContext(ContextCarro);
    const { id } = useParams();
    const [pizzaSeleccionada, setPizzaSeleccionada] = useState({});


    useEffect(() => {
        detallePizza();
    }, []);
    
    const detallePizza = () => {
        setPizzaSeleccionada(state.data.find(pizza => pizza.id === id))      
    }    
  
    return (
        <div className="mt-5">
            <h1>{pizzaSeleccionada.name}</h1>
            <img src={pizzaSeleccionada.img}/>
            <p>{pizzaSeleccionada.desc}</p>
            <p>{pizzaSeleccionada.ingredients}</p>
            <p>${pizzaSeleccionada.price}</p>


        </div>
    );
  };
  
  export default DetallePizzaItem;

