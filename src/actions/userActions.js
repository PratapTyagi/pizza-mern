import axios from "axios";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGIISTER_REQUEST" });

  try {
    const res = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const { data } = await axios.post("/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};
