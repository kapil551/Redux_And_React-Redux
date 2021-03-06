# Redux and React Redux

0. Introduction:

    - ```Redux```:

        - https://redux.js.org/
    
        - ```Redux is a state container```:

            - Redux stores the state of our application.

            - In case of react app - It stores the state of a component.
        
        - ```Redux is predictable```:

            - The state of the application can change.

            - In redux, all state transitions are explicit and it is possible to keep track of them.

            - The changes to your application state's become predictable.

    - ```React Redux```:

        - https://react-redux.js.org/

![](ReactRedux.PNG)

![](React-Redux.PNG)

1. Overview:

    - ```React``` is a library used to buils user interfaces.

    - ```Redux``` is a library for managing state in a predictable way in JavaScript applications

    - ```React-Redux``` is library that provides bindings to use React and Redux together in an application.

2. Understanding Redux:

    - https://redux.js.org/introduction/getting-started

### Redux - ```Three Core Concepts```:

1. ```Store``` - Holds the state of our application.

2. ```Action``` - Dercribes what happened

3. ```Reducer``` - Ties the store and actions together.

- A ```Store``` that holds the state of your application.

- An ```Action``` that describes the changes in the state of the application.

- A ```reducer``` which actually carries out the state transition depending on the action.

### Redux - ```Three fundamental principles```:

1. **The state of your whole application is stored in an object tree within a single store.** 
    - Maintain our application state in a single object which would be managed by the Redux store.

2. **The only way to change the state is to emit an action, an object describing what happened.**
    - To update the state of our app, you need to let Redux know about that with an action.
    - We are not allowed to directly update the state object.

3. **To specify how the state tree is transformed by actions, you write pure reducers.**
    - ```javaScript
        Reducer - (previousState, action) => newState
      ```
![](ReduxThreePrinciples.PNG)

### Actions:

- The only way your application can interact with the store.

- Carry some information from your app to the redux store.

- Plain JavaScript objects.

- Have a ```type``` property that indicates the type of action being performed.

- The ```type``` property is typically defined as string constants.

- An action is an ```object``` with a ```type``` property.

### Reducers:

- Reducers specify how the app's state changes in response to actions sent to the store.

- It describes how the application state changes.

- It is a function that accepts state and action as arguments, and returns the next state of the application.

- ```javaScript
        (previousState, action) => newState
  ```

### Store:

- One store for the entire application.

- Responsibilities:

    - Holds application state.

    - Allows access to state via ```getState()```

    - Allows state to be updated via ```dispatch(action)```

    - Registers listeners via ```subscribe(listener)```

    - Handlers unregistering of listeners via the function returned by subscribe(listener).

### Multiple Reducers:

- Need?

    - Let's say our shop needs to sell both cakes and ice creams.

    - We decided that we would have two shopkeepers one each for managing cakes and ice creams.

    - Here the two shopkeepers are nothing but the ```reducer```.
    
    - So this translates to having two reducers in our application.

- Why?

    - Can we use one reducer, Yes we can but in the long run it becomes very complex to manage the single reducer.

- Advantage?

    - Now each reducer is managing it's own part of the global state.

    - This helps in keeping the reducers complelely independent and managing different areas of the global state easily.

### Middleware:

- It is the suggested way to extend Redux with custom functionality.

- If you wantt redux with extra features middleware is the way to go.

- It provided a third-prty extension point between dispatching an action, and the moment it reaches the reducer.

- Use middleware for logging, crash reporting, performing asynchronous tasks etc.

- e.g. -> redux-logger

- https://www.npmjs.com/package/redux-logger

### Async Actions:

- Synchronous v/s Asynchronous Actions:

    - Synchronous Actions:

        - As soon as an action was dispatched, the state was immediately updated.

        - E.x. - If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1.
    
    - Asynchronous Actions:

        - E.x. - Asynchronous API calls to fetch data from an end point and use that data in our application.

    - What are we building?

        - Fetch a list of users from an API end point and stores it in the redux store.

        - State?

            - ```javaScript
                state = {
                    loading: false,
                    data:[],
                    error:''

                }
            ```

            - **loading** - Display a loading spinner in your component
            - **data** - List of users
            - **error** - Display error to the user

        - Actions?

            - **FETCH_USERS_REQUEST** - Fetch list of users
            - **FETCH_USERS_SUCCESS** - Fetched successfully
            - **FETCH_USERS_FAILURE** - Error fetching the data
        
        - Reducers?

            - ```javaScript
                case: FETCH_USERS_REQUEST
                    loading: true
              ```
            - ```javaScript
                case: FETCH_USERS_SUCCESS
                    loading: false
                    user: data (from API)
              ```
            - ```javaScript
                case: FETCH_USERS_FAILURE
                    loading: true
                    error: error (from API)
              ```
        
        - Async action creaters:
        
            - ```axios```:

                - Requests to an API endpoint

            - ```redux-thunk```:

                - This is a package from the redux ecosystem and is the standard way to ```define asynchronous action creaters``` in our application.

                - It is basically a middleware, that we apply to the redux store.