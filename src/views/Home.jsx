import { ContextCarro, useContext } from "../contexts/ContextCarro";
import PizzasList from "../components/PizzasList";

const Home = () => {
  const { state } = useContext(ContextCarro);

  
    return (
        <div>
          <PizzasList />
      </div>
    );
};

export default Home;