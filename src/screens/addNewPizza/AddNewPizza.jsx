import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPizza } from "../../actions/pizzaActions";

import Error from "../../components/error/Error";
import Success from "../../components/success/Success";
import Loading from "../../components/loading/Loading";

import "./AddNewPizza.css";
const AddNewPizza = () => {
  const dispatch = useDispatch();
  const addPizzaState = useSelector((state) => state.addPizzaReducer);

  const { loading, error, success } = addPizzaState;

  const [name, setname] = useState("");
  const [small, setsmall] = useState("");
  const [medium, setmedium] = useState("");
  const [large, setlarge] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");

  const addPizzaButton = (e) => {
    e.preventDefault();

    const pizza = {
      name,
      description,
      category,
      image,
      prices: {
        small: Number(small),
        medium: Number(medium),
        large: Number(large),
      },
    };

    dispatch(addPizza(pizza));
  };

  return (
    <div className="addNewPizza">
      <div className="addNewPizza__inner">
        <h5>Add New Pizza</h5>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}
        <form className="addNewPizza__form">
          <p>Pizza Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            autoComplete="false"
          />

          <p>Small Varient Price</p>
          <input
            type="text"
            value={small}
            onChange={(e) => setsmall(e.target.value)}
            required
            autoComplete="false"
            placeholder=""
          />

          <p>Medium Varient Price</p>
          <input
            type="text"
            value={medium}
            onChange={(e) => setmedium(e.target.value)}
            required
            autoComplete="false"
            placeholder=""
          />
          <p>Large Varient Price</p>
          <input
            type="text"
            value={large}
            onChange={(e) => setlarge(e.target.value)}
            required
            autoComplete="false"
            placeholder=""
          />
          <p>Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            required
            autoComplete="false"
            placeholder=""
          />

          <p>Image URL</p>
          <input
            type="text"
            required
            autoComplete="false"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            placeholder=""
          />

          <p>Category</p>
          <input
            type="text"
            required
            autoComplete="false"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder=""
          />

          <Link
            to="/admin/pizzaslist"
            className="addNewPizza__form__link"
            style={{ textDecoration: "none" }}
          >
            <button type="submit" onClick={addPizzaButton}>
              Add Pizza
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddNewPizza;
