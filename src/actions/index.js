import axios from "axios";

export const createData = () => {
  return async function (dispatch) {
    const response = await axios.get("https://reqres.in/api/users");
    console.log("as", response.data.data);
    return dispatch({
      type: "CREATE",
      payload: response.data.data,
    });
  };
};

export const updateData = (data) => {
  console.log('updateData', data)
  return async function (dispatch) {
    const response = await axios.patch(`https://reqres.in/api/users/${data.id}`, data);
    console.log("res", response);
    return dispatch({
      type: "UPDATE",
      payload: response.data
    });
  };
};

export const deleteData = (id) => {
  console.log("idsfs", id)
  return async function (dispatch) {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(response.data.data);
    return dispatch({
      type: "DELETE",
      payload: response.data.data
    });
  };
};

export const registerUser = (data) => {
  console.log('dsa',data.data)
  return async function (dispatch) {
    const response = await axios.post(`https://reqres.in/api/register`,data.data);
     console.log('reg',response)
    return dispatch({
      type: "REGISTER",
      payload: response
    });
  };
};

export const loginUser = (data) => {
  console.log('Log',data.login)
  return async function (dispatch) {
    const response = await axios.get(`https://reqres.in/api/login`,data);
     console.log('login',response)
    return dispatch({
      type: "LOGIN",
      payload: response
    });
  };
};
