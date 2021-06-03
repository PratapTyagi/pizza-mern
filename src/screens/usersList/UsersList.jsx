import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../actions/userActions";

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
    <div className="usersList">
      <h5>Users List</h5>
      {loading && <Loading />}
      {error && <Error error=" Something went wrong" />}
      <table className="table table-bordered">
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
                    {!user.isAdmin ? (
                      <i
                        className="bi bi-trash"
                        onClick={() => dispatch(deleteUser(user._id))}
                      ></i>
                    ) : (
                      <h6>Admin</h6>
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

export default UsersList;
