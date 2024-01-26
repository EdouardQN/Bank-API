import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );

export default store;
