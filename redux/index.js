const redux = require('redux');

// initialize the redux store
const createStore = redux.createStore;

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

// initial state -> state will always be an object
const initialState = {
    numberOfCakes: 10,
    numderOfIceCream: 20
}

// reducer function
const reducer = (state = initialState, action) => {

    switch(action.type) {

        // return the next state of the application as a new object
        case BUY_CAKE: return {
            ...state, // make a copy of the object
            numberOfCakes: state.numberOfCakes - 1, // then only update the numberOfCakes
        }

        case BUY_ICECREAM: return {
            ...state, // make a copy of the object
            numderOfIceCream: state.numderOfIceCream - 1, // then only update the numberOfCakes
        }

        default: return state
    }
}

// create a redux store -> Holding the application state
const store = createStore(reducer);

// Allows access to state via ```getState()```
console.log('Initial State', store.getState());

// Registers listeners via ```subscribe(listener)```
const unsubscirbe = store.subscribe(() => console.log('Updated state', store.getState()));

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
