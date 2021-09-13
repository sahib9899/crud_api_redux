import axios from "axios";

export const createData = () => {
  return async function (dispatch) {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
    return dispatch({
      type: "CREATE",
      payload: response.data.data
    });
  };
};

export const updateData = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log('res',response)
    return dispatch({
      type: "UPDATE",
      payload: response.data
    });
  };
};

export const deleteData = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(id);
    return dispatch({
      type: "DELETE",
      payload: response.data
    });
  };
};
