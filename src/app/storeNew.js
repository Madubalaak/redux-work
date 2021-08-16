import { createStore,combineReducers } from "redux";
import counterReducer from '../features/counterLogic/counterReducer';

const rootReducer=combineReducers({
    counterReducer,
});
const store=createStore(rootReducer,{});

export default store;