import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const initialState = {
    // Set to empty obect for now
};

// Store any middle we want to use later
const middleWare = [thunk];


// pass in our reducer, our initial state, and a middleware. Compose allow use to pass multiple middleware
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;