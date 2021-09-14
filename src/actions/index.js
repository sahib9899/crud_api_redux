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

export const updateData = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log("res", response);
    return dispatch({
      type: "UPDATE",
      payload: response.data
    });
  };
};

export const deleteData = (id) => {
  console.log("id", id)
  // return async function (dispatch) {
  //   const response = await axios.delete(`https://reqres.in/api/users/${id}`);
    // console.log(response);
    return ({
      type: "DELETE",
      payload: id
    });
  };
// };

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
    const response = await axios.post(`https://reqres.in/api/login`,data);
     console.log('login',response)
    return dispatch({
      type: "LOGIN",
      payload: response
    });
  };
};
