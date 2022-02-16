import {useSelector, useDispatch} from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({type: "increment"});
  };

  const increment5Handler = () => {
    dispatch({type: "increase", amount: 5});
  };

  const decrementHandler = () => {
    dispatch({type: "decrement"});
  };

  const decrement5Handler = () => {
    dispatch({type: "decrease", amount: 5});
  };

  const zeroHandler = () => {
    dispatch({type: "zero"});
  };
  const toggleCounterHandler = () => {};
  console.log(dispatch);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increment5Handler}>increment 5</button>
        <button onClick={zeroHandler}>returnZero</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decrement5Handler}>decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
