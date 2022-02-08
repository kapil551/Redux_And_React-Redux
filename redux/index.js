// type of the action
const BUY_CAKE = 'BUY_CAKE';

// action creater -> an action creater is simply a function that returns an action.
function buyCake() {

    // define the action -> action is an object with a type property
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }

}

// reducers
// (previousState, action) => newState

// initial state -> state will always be an object
const initialState = {
    numberOfCakes: 10
}

// reducer function
const reducer = (state = initialState, action) => {

    switch(action.type) {

        // return the next state of the application as a new object
        case BUY_CAKE: return {
            ...state, // make a copy of the object
            numberOfCakes: state.numberOfCakes - 1, // then only update the numberOfCakes
        }

        default: return state
    }
}
