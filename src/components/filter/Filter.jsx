import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPizza } from "../../actions/pizzaActions";

import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="filter">
      <div className="filter__inner">
        <input
          type="text"
          placeholder="Search Pizza"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non Veg</option>
        </select>
        <button onClick={() => dispatch(filterPizza(searchKey, category))}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
