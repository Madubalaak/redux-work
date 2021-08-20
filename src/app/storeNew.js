import { createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import counterReducer from '../features/counterLogic/counterReducer';
import users from '../features/counterLogic/userReducer';


const rootReducer=combineReducers({
    counterReducer,
    users,
});
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;