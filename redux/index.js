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
