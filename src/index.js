import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

// Main reducer to add new inputs to one object, when submitting it clears it back to an empty object
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

// Reducer to toggle between edit mode and regular mode. 
const editReducer = (state = false, action) => {
    if (action.type === 'EDIT_TRUE') {
        return (true)
    } else if (action.type === 'EDIT_FALSE') {
        return (false)
    }
    return state;
};

const store = createStore(
    combineReducers({
        inputReducer,
        editReducer,
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
