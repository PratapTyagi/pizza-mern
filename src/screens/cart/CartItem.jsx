import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../actions/cartAction";
const CartItem = ({ item, image, name, price, quantity, varient }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart__items">
        <div className="cart__item__info">
          <p>
            <strong>{name}</strong> [{varient}]
          </p>
          <p>price: ₹ {price}</p>
          <p>
            quantity{" "}
            <span
              className="operations"
              onClick={() => dispatch(addToCart(item, quantity + 1, varient))}
            >
              +
            </span>
            {quantity}{" "}
            <span
              className="operations"
              onClick={() => dispatch(addToCart(item, quantity - 1, varient))}
            >
              -
            </span>
          </p>
        </div>
        <div className="cart__items__right">
          <img src={image} alt="image" />
          <p onClick={() => dispatch(deleteFromCart(item))}>X</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
