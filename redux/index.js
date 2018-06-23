import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const userReducer = function (state = {}, action) {
    switch (action.type) {
        case 'FOO':
            return { ...state, name: action.payload.name };
            break;
    }
    return state;

}

const tweetReduce = function (state = {}, action) {
    switch (action.type) {
        case 'TWEE':
            return { ...state, twee: action.payload.twee };
            break;
    }
    return state;
}

const rootReducer = combineReducers({
    user: userReducer,
    tweet: tweetReduce,
});

const reducer = function (state = {}, action) {
    return { ...state }
}

const store = createStore(rootReducer, {});

store.subscribe((() => {
    console.log(store.getState());
}));

store.dispatch({ type: 'FOO', payload: { name: 'giorgi' } });
store.dispatch({ type: 'TWEE', payload: { twee: 'tweet name' } });


console.log(store);