import "./OrderItem.css";
const OrderItem = ({ order }) => {
  return (
    <>
      {order.orderItems.map((item) => (
        <>
          <div className="order">
            <div className="left">
              <h6>Items</h6>
              <p>
                {item.name} [{item.varient}] * {item.quantity} = {item.price}
              </p>
            </div>
            <div className="center">
              <h6>Address</h6>
              <p>Street: {order.shippingAddress.street}</p>
              <p>City: {order.shippingAddress.city}</p>
              <p>Country: {order.shippingAddress.country}</p>
              <p>Pincode: {order.shippingAddress.pincode}</p>
            </div>
            <div className="right">
              <h6>Order Info</h6>
              <p>Order Amount: {order.orderAmount}</p>
              <p>Date: {order.createdAt.substring(0, 10)}</p>
              <p>Transaction Id: {order.transactionId}</p>
              <p>Order Id: {order._id}</p>
            </div>
          </div>
          <hr />
        </>
      ))}
    </>
  );
};

export default OrderItem;
