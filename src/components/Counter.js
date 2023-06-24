// Importing the "useSelector" hook from the react-redux library. There is also "useStore"
// which gives us direct access to the store, but useSelector is a bit more convenient 
// to use because it allows us to select a part of our state managed by the store. We're
// also importing useDispatch so that we can dispatch actions which change the data in
// the store from within this component.
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // Calling useDispatch() which gives us a dispatch function we can execute.
  const dispatch = useDispatch();
  // Calling useSelector here. It takes a function which will be executed by react-redux
  // which determines which piece of data we want to extract from our store. This 
  // function recieves the state in our store, then returns the part of the state that
  // we want to extract. In this case we want the counter from our store. When we use
  // "useSelector", react-redux will automatically set up a subscription to the store
  // for this component so that it will get all updates to the whatever data we're 
  // extracting from our store, in this case we will get all updates to the counter. 
  const counter = useSelector(state => state.counter);
 
  const incrementHandler = () => {
    // Using our dispatch() function which dispatches an action. An action is a 
    // Javascript object with a "type" property which acts as an identifier. Typically 
    // type would be a string which identifies which action is being performed. Every 
    // time an action runs (or is "dispatched") the redux store reducer function runs 
    // again depending on that type of action we're dispatching. See the index.js file
    // to take a look at the redux store reducer function.
    dispatch({ type: 'INCREMENT' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
