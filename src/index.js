import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const inputReducer = (state = {}, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload};
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload};
    } else if (action.type === 'ADD_SUPPORTING') {
        return {...state, support: action.payload};
    } else if (action.type === 'ADD_COMMENTS') {
        return {...state, comments: action.payload};
    } else if (action.type === 'SUCCESS') {
        return {};
    }
    console.log(state);
    return state;
};

const store = createStore(
    combineReducers({
        inputReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
