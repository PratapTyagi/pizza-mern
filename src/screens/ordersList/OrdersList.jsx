import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../../actions/orderAction";

import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import "./OrdersList.css";
const OrdersList = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getAllOrdersReducer);

  const { loading, error, orders } = ordersState;
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div className="ordersList">
      <h5>Orders List</h5>
      {loading && <Loading />}
      {error && <Error error=" Something went wrong" />}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <h6>Delivered</h6>
                    ) : (
                      <button onClick={() => dispatch(deliverOrder(order._id))}>
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
