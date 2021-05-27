import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pizzas from "../pizzasdata";
import { Pizza } from "../components";

import { getAllPizza } from "../actions/pizzaActions";

import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  return (
    <div className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza pizza={pizza} />
      ))}
    </div>
  );
};

export default Home;
