export const regisrtation = (state = [], action) => {
    console.log(action.payload)
  switch (action.type) {

    case "REGISTER":
      console.log("payload", action.payload.data);
      return action.payload.data;

    default: return [state];
  }
};

export const loginReducer = (state=[], action) => {
  switch(action.type){

    case "LOGIN":
      console.log('logindsafa',action.payload.data);
      return action.payload;

      default: return [state];
  }
}

