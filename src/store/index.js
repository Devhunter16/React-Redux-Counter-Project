// Importing configureStore function from redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing the slices of our data store
import counterSlice from './counter';
import authenticationSlice from './auth';

// Core redux concepts: Central Data (State) Store --> Components --> Action -->
// Reducer Function --> Back around to beginning

// Creating the central data store. We use our configureStore function imported from
// redix toolkit here. We pass in the expected "reducer" property here. 
// counterSlice.reducer is all of the reducer functions we defined in counterSlice. 
// authenticationSlice.reducer is all of the reducer functions we defined in 
// authenticationSlice. This can be confusing because on counterSlice and 
// authenticationSlice they are defined with "reducers" and not "reducer".
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer
    }
});

// We want to export our store and connect our React application to our store. To do
// this, we need to provide this store to the React app. Take a look at the other
// index.js file for an explanation on how we're doing this.
export default store;

// A subscriber is a function which does not take any parameters. Inside of the function
// we reach out to the store with store.getState(). .getState() is a method which is
// available on the store we created with .createStore(). It will give us the latest
// state snapshot after the store was updated.
const Subscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Here we're making redux aware of our subscriber function and telling it that that
// function should be executed whenever our state changes. We do this by passing our 
// subscriber function to the .subscribe() method on our store.
store.subscribe(Subscriber);
