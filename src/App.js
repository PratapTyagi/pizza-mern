import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components";
import Home from "./screens/Home";
import Cart from "./screens/cart/Cart";
import Login from "./screens/authentication/Login";
import Register from "./screens/authentication/Register";
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
      </Router>
    </div>
  );
}

export default App;
