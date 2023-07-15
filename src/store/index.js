// Importing the createStore function from redux 
import { createStore } from 'redux';

// Core redux concepts: Central Data (State) Store --> Components --> Action -->
// Reducer Function --> Back around to beginning

// Defining our starting state
const initialState = { 
    counter: 0,
    showCounter: true
};

// Reducer function. A reducer function's goal is to spit out a state snapshot initially
// and also whenever an action reaches it. It always recieves two parameters, the
// existing state, and the action that was dispatched. It's output is the new state
// object. This should be a "pure" function, meaning that the same inputs should always
// produce the same output. In other words, there should be no side-effects. We give
// the state parameter a default value becuase the first time counterReducer runs, there
// is not existing or current state, so we need to define a current state.
const counterReducer = (state = initialState, action) => {
    // if the type of action is 'INCREMENT', then return the incremented new state.
    if (action.type === 'INCREMENT') {
        // Returning the new state.
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter // Keeping showCounter as whatever it was in the last state
        };
    };
    if (action.type === 'INCREASE') {
        // Returning the current state + the action.amount. We define what that amount
        // is when we dispatch the action in one of our components.
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    };
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    };
    if (action.type === 'TOGGLE') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter // Making showCounter the opposite of whatever it was in the last state
        };
    };

    // Otherwise we return the unchanged state.
    return state;
};

// Creating the central data store. We pass our reducer to this createStore() function.
// We do this because the store needs to know which reducer function is responsible for
// changing it.
const store = createStore(counterReducer);

// We want to export our store and connect our React application to our store. To do
// this, we need to provide this store to the React app. Take a look at the other
// index.js file for an explanation on how we're doing this.
export default store;

// A subscriber is a function which does not take any parameters. Inside of the function
// we reach out to the store with store.getState(). .getState() is a method which is
// available on the store we created with .createStore(). It will give us the latest
// state snapshot after the store was updated.
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Here we're making redux aware of our subscriber function and telling it that that
// function should be executed whenever our state changes. We do this by passing our 
// subscriber function to the .subscribe() method on our store.
store.subscribe(counterSubscriber);

// When we run "node redux-demo.js in the console we recieve { counter: 1 } and then 
// { counter: 0 }. This is because we dispatched two actions (seen directly above) where
//  the counter is incremented and then decremented.