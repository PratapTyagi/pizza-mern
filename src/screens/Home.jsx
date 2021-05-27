import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pizza } from "../components";

import { getAllPizza } from "../actions/pizzaActions";

import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzaReducer);

  const { pizzas, loading, error } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  return (
    <div className="pizzas">
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        pizzas.map((pizza) => <Pizza key={pizza._id} pizza={pizza} />)
      )}
    </div>
  );
};

export default Home;
