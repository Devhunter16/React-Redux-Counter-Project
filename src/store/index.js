// Importing the createSlice and configureStore functions from redux toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Core redux concepts: Central Data (State) Store --> Components --> Action -->
// Reducer Function --> Back around to beginning

// Defining our starting state
const initialState = { 
    counter: 0,
    showCounter: true
};

// createSlice prepares a slice of our global state. It takes an object as an argument.
// Every slice requires a "name" property within that object. It
// also requires an initial state (for ours we're just using our already-defined initial
// state). We need reducer functions as well. Each reducer function we define within 
// createSlice automatically recieves the current state. Unlike reducer functions we
// define outside of createSlice, the ones we define here can directly manipulate the 
// current state in order to update it without causing bugs (redux toolkit handles this
// for us).
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            // Take a look at the Counter.js file to see what payload is.
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// Creating the central data store. We use our configureStore function imported from
// redix toolkit here. We pass in the expected "reducer" property here. 
// counterSlice.reducer is all of the reducer functions we defined in counterSlice. 
// This can be confusing because on counterSlice they are defined with "reducers" and
// not "reducer".
const store = configureStore({
    reducer: counterSlice.reducer
});

// Exporting counterSlice.actions here which gives us access to actions that
// automatically trigger our reducer functions we defined using createSlice().
// We want to access these actions in other components so we can update the data
// store using those components.
export const counterActions = counterSlice.actions;

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