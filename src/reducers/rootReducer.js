import { combineReducers } from "redux";
import crudOperation from "./crudReducer";

const rootReducer = combineReducers({
    crudOperation: crudOperation
})

export default rootReducer;