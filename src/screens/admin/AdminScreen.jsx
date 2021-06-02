import { useEffect } from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import OrdersList from "../ordersList/OrdersList";
import PizzasList from "../pizzasList/PizzasList";
import AddNewPizza from "../addNewPizza/AddNewPizza";
import EditPizzaAdmin from "../editPizzaAdmin/EditPizzaAdmin";
import UsersList from "../usersList/UsersList";

import "./AdminScreen.css";
const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="admin">
      <h4>Admin Pannel</h4>
      <div className="admin__nav">
        <div className="admin__nav__inner">
          <Link
            className="admin__nav__inner__link"
            to="/admin/userslist"
            style={{ textDecoration: "none" }}
          >
            <p>Users List</p>
          </Link>
          <Link
            className="admin__nav__inner__link"
            to="/admin/pizzaslist"
            style={{ textDecoration: "none" }}
          >
            <p>Pizzas List</p>
          </Link>
          <Link
            className="admin__nav__inner__link"
            to="/admin/addnewpizza"
            style={{ textDecoration: "none" }}
          >
            <p>Add New Pizza</p>
          </Link>
          <Link
            className="admin__nav__inner__link"
            to="/admin/orderslist"
            style={{ textDecoration: "none" }}
          >
            <p>Orders List</p>
          </Link>
        </div>
        <div className="admin__nav__routes">
          <Switch>
            <Route path="/admin" exact component={UsersList} />
            <Route path="/admin/userslist" exact component={UsersList} />
            <Route path="/admin/pizzaslist" exact component={PizzasList} />
            <Route path="/admin/addnewpizza" exact component={AddNewPizza} />
            <Route path="/admin/orderslist" exact component={OrdersList} />
            <Route
              path="/admin/editpizza/:pizzaid"
              exact
              component={EditPizzaAdmin}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
