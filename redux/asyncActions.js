const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// state:
const initialState = {

    loading: false,
    data: [],
    error: ''
}

// action:

// action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// action creater functions
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

// action creater
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

// action creater
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// async action creater
const fetchUsers = () => {

    // the thunk middleware brings to the table is the ability for action creater to return a function instead of an action object
    return function(dispatch) {

        // dispatch action --> fetchUsersRequest()
        dispatch(fetchUsersRequest());

        // This is a special function that is allowed to have side effects such as async API calls.
        // This function can also dispatch actions

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // response.data is the array of users
                const users = response.data.map((user) => user.name);

                // dispatch action --> fetchUsersSuccess()
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error .message is the error description

                // dispatch action --> fetchUsersFailure()
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

// reducer:
const reducer = (state = initialState, action) => {

    switch(action.type) {

        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }

    }
}

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => { console.log(store.getState())});
store.dispatch(fetchUsers());