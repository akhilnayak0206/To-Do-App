import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducer';

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, compose(middleware));

export default store;
