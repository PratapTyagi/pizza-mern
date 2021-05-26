import pizzas from "../pizzasdata";
import { Pizza } from "../components";

import "./Home.css";
const Home = () => {
  return (
    <div className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
