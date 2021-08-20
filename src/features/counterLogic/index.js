import React from "react";
import { useDispatch, useSelector} from "react-redux";
import "./index.css";
import {onIncrease,onDecrease,onIncreaseByFive,onToggle} from "./counterAction";


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
      <button type="button" onClick={() => dispatch(onIncrease())}>
        Count Increase
      </button>
      <button type="button" onClick={() => dispatch(onIncreaseByFive())}>
        Count Increase by 5
      </button>
      <button type="button" onClick={() => dispatch(onDecrease())}>
        Count Decrease
      </button>
      <button type="button" onClick={() => dispatch(onToggle())}>
        Toggle Counter
      </button>
     
    </div>
  );
};


export default Counter;
