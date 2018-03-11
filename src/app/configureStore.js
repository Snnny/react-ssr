import {createStore, applyMiddleware,compose} from "redux";
import thunkMiddleware from "redux-thunk";
import createHistory from 'history/createMemoryHistory';
import {  routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from '../store/reducers/index.js';
import { createLogger } from 'redux-logger'

const routerReducers=routerMiddleware(createHistory());//路由
const composeEnhancers = 
  process.env.NODE_ENV=='development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    : compose;

const middleware=[thunkMiddleware,routerReducers];

if(process.env.NODE_ENV === 'development'){
  middleware.push(createLogger())
}
let configureStore =(initialState)=> 
  createStore(rootReducer,initialState,compose(applyMiddleware(...middleware)));

export default configureStore;
