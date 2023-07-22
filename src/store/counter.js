import { createSlice } from '@reduxjs/toolkit';

// Defining our starting counter state
const initialCounterState = { 
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
    initialState: initialCounterState,
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

// Exporting counterSlice.actions here which gives us access to actions that
// automatically trigger our reducer functions we defined using createSlice().
// We want to access these actions in other components so we can update the data
// store using those components.
export const counterActions = counterSlice.actions;

export default counterSlice;