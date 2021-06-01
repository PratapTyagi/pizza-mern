import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pizza } from "../components";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import Filter from "../components/filter/Filter";

import { getAllPizza } from "../actions/pizzaActions";

import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();

  const { pizzas, loading, error } = useSelector(
    (state) => state.getAllPizzaReducer
  );

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  return (
    <>
      <Filter />
      <div className="pizzas">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error=" Something went wrong" />
        ) : (
          pizzas.map((pizza) => <Pizza key={pizza._id} pizza={pizza} />)
        )}
      </div>
    </>
  );
};

export default Home;
