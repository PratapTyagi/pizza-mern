const CartItem = ({ name, price, quantity, varient }) => {
  return (
    <>
      <div className="cart__items">
        <div className="cart__item__info">
          <p>
            {name} [{varient}]
          </p>
          <p>price: ₹ {price}</p>
          <p>
            quantity <span className="operations">+</span>
            {quantity} <span className="operations">-</span>
          </p>
        </div>
        <div className="cart__items__right">
          <img
            src="https://avatars.githubusercontent.com/u/45279411?v=4"
            alt="image"
          />
          <p>X</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
