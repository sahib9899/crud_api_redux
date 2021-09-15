import { combineReducers } from "redux";
import crudOperation from "./crudReducer";
import {regisrtation, loginReducer} from "./loginReducer";

const rootReducer = combineReducers({
    crudOperation,
    regisrtation,
    loginReducer
})

export default rootReducer;