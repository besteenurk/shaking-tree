import { combineReducers } from "redux";
import shakingReducer from "./shakingReducer";

// if more than one reducers, we should use combineReducer
export default combineReducers({
    shakingReducer
});
