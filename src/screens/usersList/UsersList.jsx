import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userActions";

import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import "./UsersList.css";
const UsersList = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.getAllUsersReducer);

  const { loading, error, users } = usersState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h5>Users List</h5>
      {loading && <Loading />}
      {error && <Error error=" Something went wrong" />}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
