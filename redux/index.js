const redux = require('redux');
const reduxLogger = require('redux-logger');

// initialize the redux store
const createStore = redux.createStore;
// for combining reducers
const combineReducers = redux.combineReducers;
// apply middleware function
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

// type of the action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// action creater -> an action creater is simply a function that returns an action.
function buyCake() {

    // define the action -> action is an object with a type property
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }

}

function buyIceCream() {

    return {
        type: BUY_ICECREAM,
        infor: 'Second redux action'
    }
}

// reducers
// (previousState, action) => newState

// initial cake state -> state will always be an object
const initialCakeState = {
    numberOfCakes: 10,
}

// initial ice cream state
const initialIceCreamState = {
    numderOfIceCream: 20,
}

// first reducer function --> only bothered about the cake state
const cakeReducer = (state = initialCakeState, action) => {

    switch(action.type) {

        // return the next state of the application as a new object
        case BUY_CAKE: return {
            ...state, // make a copy of the object
            numberOfCakes: state.numberOfCakes - 1, // then only update the numberOfCakes
        }

        default: return state
    }
}

// second reducer function --> only bothered about the ice cream state
const iceCreamReducer = (state = initialIceCreamState, action) => {

    switch(action.type) {

        // return the next state of the application as a new object
        case BUY_ICECREAM: return {
            ...state, // make a copy of the object
            numderOfIceCream: state.numderOfIceCream - 1, // then only update the numberOfCakes
        }

        default: return state
    }
}

// combine all the reducers as the root reducer
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// create a redux store -> Holding the application state
const store = createStore(rootReducer, applyMiddleware(logger));

// Allows access to state via ```getState()```
console.log('Initial State', store.getState());

// Registers listeners via ```subscribe(listener)```
const unsubscirbe = store.subscribe(() => {});

// Allows state to be updated via ```dispatch(action)```
// disptach accepts the action creater function
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());


// Handlers unregistering of listeners via the function returned by subscribe(listener)
unsubscirbe();
