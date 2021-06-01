import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components";
import Home from "./screens/Home";
import Cart from "./screens/cart/Cart";
import Login from "./screens/authentication/Login";
import Register from "./screens/authentication/Register";
import OrdersScreen from "./screens/orders/OrdersScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/orders" exact component={OrdersScreen} />
        <Route path="/admin" component={AdminScreen} />
      </Router>
    </div>
  );
}

export default App;
