import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPizzaById } from "../../actions/pizzaActions";
import { editPizzaAction } from "../../actions/pizzaActions";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import Success from "../../components/success/Success";

import "./EditPizzaAdmin.css";
const EditPizzaAdmin = ({ match }) => {
  const [name, setname] = useState("");
  const [small, setsmall] = useState("");
  const [medium, setmedium] = useState("");
  const [large, setlarge] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const getPizzaByIdReducerState = useSelector(
    (state) => state.getPizzaByIdReducer
  );
  const { loading, error, pizza } = getPizzaByIdReducerState;

  const editPizzaState = useSelector((state) => state.editPizzaReducer);

  const { editloading, editerror, editsuccess } = editPizzaState;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setname(pizza.name);
        setsmall(pizza.prices[0].small);
        setmedium(pizza.prices[0].medium);
        setlarge(pizza.prices[0].large);
        setdescription(pizza.description);
        setimage(pizza.image);
        setcategory(pizza.category);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else dispatch(getPizzaById(match.params.pizzaid));
  }, [pizza, dispatch]);

  const editPizzaButton = (e) => {
    e.preventDefault();

    const updatedPizza = {
      _id: match.params.pizzaid,
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
    dispatch(editPizzaAction(updatedPizza));
  };

  return (
    <div className="addNewPizza">
      <div className="addNewPizza__inner">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (
          <Success success="Pizza description edited successfully" />
        )}
        <h5>Edit Pizza</h5>
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
            <button type="submit" onClick={editPizzaButton}>
              Edit Pizza
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditPizzaAdmin;
