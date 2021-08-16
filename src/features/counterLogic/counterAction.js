import {
  INCREASE,
  DECREASE,
  INCREASE_BY_FIVE,
  TOGGLE,
} from "./counterActionConstants";

export const onIncrease = (dispatch) => {
  dispatch({ type: INCREASE });
};
export const onDecrease = (dispatch) => {
  dispatch({ type: DECREASE });
};
export const onIncreaseByFive = (dispatch) => {
  dispatch({ type: INCREASE_BY_FIVE });
};
export const onToggle = (dispatch) => {
  dispatch({ type: TOGGLE });
};
