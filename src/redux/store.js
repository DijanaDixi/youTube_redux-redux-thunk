import {createStore} from "redux";
import youTubeReducer from "./youTube/youTubeReducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"


const store=createStore(youTubeReducer, applyMiddleware(thunkMiddleware));

export default store;