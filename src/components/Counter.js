// Importing the "useSelector" hook from the react-redux library. There is also "useStore"
// which gives us direct access to the store, but useSelector is a bit more convenient 
// to use because it allows us to select a part of our state managed by the store. We're
// also importing useDispatch so that we can dispatch actions which change the data in
// the store from within this component.
import { useSelector, useDispatch } from 'react-redux';

// Importing our potential actions from index.js so we can manipulate the data store from
// this file.
import { counterActions } from '../store/index';
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
  const show = useSelector(state => state.showCounter);
 
  const incrementHandler = () => {
    // Using our dispatch() function which dispatches an action. An action is a 
    // Javascript object with a "type" property which acts as an identifier. Typically 
    // type would be a string which identifies which action is being performed. Every 
    // time an action runs (or is "dispatched") the redux store reducer function runs 
    // again depending on that type of action we're dispatching. See the index.js file
    // to take a look at the redux store reducer functions.
    dispatch(counterActions.increment());
  };

  // In this function, we not only dispatch our action, but we pass in a value
  // of 5. This is because we want to increase by 5. Any value we pass into an action
  // method (in this case 5) will be stored in a field we cannot see called "payload".
  // Redux Toolkit does this automatically. So if you look at our Index.js file and you
  // see "payload" that is 5.
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
