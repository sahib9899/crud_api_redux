const crudOperation = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      // console.log("Hello",action.payload)
      return action.payload;

    case "UPDATE":
      console.log("as", action.payload);
      const index = state.findIndex((item) => item.id === action.payload.id);
      const newData = [...state];
      newData[index] = action.payload;
      return newData;

    case "DELETE":
      // console.log('as',action.payload)
      return state.filter((state) => {
        return state.id !== action.payload.data.id;
      });

    default:
      return state;
  }
};

export default crudOperation;
