import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../actions/orderAction";
import StripeCheckout from "react-stripe-checkout";

import "./Checkout.css";
import Loading from "../loading/Loading";
import Success from "../success/Success";
import Error from "../error/Error";
const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal));
  };

  const orderState = useSelector((state) => state.placeOrderReducer);

  const { loading, success, error } = orderState;

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}
      <StripeCheckout
        name="Pay Now"
        shippingAddress
        stripeKey="pk_test_51IwlHJSGzj1nyQzAs3yswRS2GfViJ0YULQyLCLfjtXeCk2y7DuVYYHzhSatA2XUEb2RzMc5JkvItEUDsZj3IwtEH00dqpQJLWs"
        amount={subtotal * 100}
        currency="INR"
        token={tokenHandler}
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
