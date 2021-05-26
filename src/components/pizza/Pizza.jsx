import { useState } from "react";
import "./Pizza.css";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pizza">
      <h1>{pizza.name}</h1>
      <img className="pizza__image" src={pizza.image} alt={pizza.name} />
      <div className="pizza__descrip__top">
        <div className="varients">
          <p>Varients</p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((v) => (
              <option value={v}>{v}</option>
            ))}
          </select>
        </div>
        <div className="quantity">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="pizza__descrip__bottom">
        <p>Price: ₹ {pizza.prices[0][varient] * quantity}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Pizza;
