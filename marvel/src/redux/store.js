import { createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import {charReducer} from './reducer'

export const RootReducer = combineReducers({
    chars: charReducer,
})

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk, reduxLogger)));
