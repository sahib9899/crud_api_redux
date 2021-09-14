import { combineReducers } from "redux";
import crudOperation from "./crudReducer";
import {regisrtation, loginReducer} from "./loginReducer";

const rootReducer = combineReducers({
    crudOperation: crudOperation,
    regisrtation: regisrtation,
    loginReducer: loginReducer
})

export default rootReducer;