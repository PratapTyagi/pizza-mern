import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import { deletePizzaAction, getAllPizza } from "../../actions/pizzaActions";

import "./PizzasList.css";
const PizzasList = () => {
  const dispatch = useDispatch();

  const { pizzas, loading, error } = useSelector(
    (state) => state.getAllPizzaReducer
  );

  useEffect(() => {
    dispatch(getAllPizza());
  }, []);

  return (
    <div className="pizzasList">
      <h5>Pizzas List</h5>
      {loading && <Loading />}
      {error && <Error error=" Something went wrong" />}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas &&
            pizzas.map((pizza) => {
              return (
                <tr key={pizza._id}>
                  <td>{pizza.name}</td>
                  <td>
                    Small: {pizza.prices[0]["small"]} <br />
                    Medium: {pizza.prices[0]["medium"]} <br />
                    Large: {pizza.prices[0]["large"]}
                  </td>
                  <td>{pizza.category}</td>
                  <td>
                    <i
                      className="bi bi-trash"
                      onClick={() => dispatch(deletePizzaAction(pizza._id))}
                    ></i>
                    <Link to={`/admin/editpizza/${pizza._id}`}>
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PizzasList;
