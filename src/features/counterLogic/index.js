import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import {
  onIncrease,
  onDecrease,
  onIncreaseByFive,
  onToggle,
} from "./counterAction";

const Counter = () => {
  const count = useSelector((state) => {
    return state.counterReducer.count;
  });
  const show = useSelector((state) => {
    return state.counterReducer.showCounter;
  });
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h1>Counter</h1>
      {show && <div>{count}</div>}
      <button type="button" onClick={() => onIncrease(dispatch)}>
        Count Increase
      </button>
      <button type="button" onClick={() => onIncreaseByFive(dispatch)}>
        Count Increase by 5
      </button>
      <button type="button" onClick={() => onDecrease(dispatch)}>
        Count Decrease
      </button>
      <button type="button" onClick={() => onToggle(dispatch)}>
        Toggle Counter
      </button>
    </div>
  );
};
export default Counter;
