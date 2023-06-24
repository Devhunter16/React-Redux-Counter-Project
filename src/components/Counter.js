// Importing the "useSelector" hook from the react-redux library. There is also "useStore"
// which gives us direct access to the store, but useSelector is a bit more convenient 
// to use because it allows us to select a part of our state managed by the store.
import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // Calling useSelector here. It takes a function which will be executed by react-redux
  // which determines which piece of data we want to extract from our store. This 
  // function recieves the state in our store, then returns the part of the state that
  // we want to extract. In this case we want the counter from our store. When we use
  // "useSelector", react-redux will automatically set up a subscription to the store
  // for this component so that it will get all updates to the whatever data we're 
  // extracting from our store, in this case we will get all updates to the counter. 
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
