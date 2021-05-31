import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../actions/orderAction";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import OrderItem from "./OrderItem";

import "./OrdersScreen.css";
const OrdersScreen = () => {
  const dispatch = useDispatch();

  const ordersState = useSelector((state) => state.getOrdersReducer);

  const { orders, error, loading } = ordersState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div className="orderScreen">
      <h4>My Orders</h4>
      <div className="orders">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders && orders.map((order) => <OrderItem order={order} />)}
      </div>
    </div>
  );
};

export default OrdersScreen;
