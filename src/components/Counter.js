import {useSelector, useDispatch} from "react-redux";
import {counterAction} from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const increment5Handler = () => {
    dispatch(counterAction.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const decrement5Handler = () => {
    dispatch(counterAction.decrease(-5));
  };

  // const zeroHandler = () => {
  //   dispatch({type: "zero"});
  // };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  console.log(dispatch);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increment5Handler}>increment 5</button>
        {/* <button onClick={zeroHandler}>returnZero</button> */}
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decrement5Handler}>decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
