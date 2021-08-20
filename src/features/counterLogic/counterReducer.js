const initialState = {
  count: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...state,
        count: state.count + 1,
        showCounter: state.showCounter,
      };
    }
    case "DECREASE": {
      return {
        ...state,
        count: state.count - 1,
        showCounter: state.showCounter,
      };
    }
    case "INCREASE_BY_FIVE": {
      return {
        ...state,
        count: state.count + 5,
        showCounter: state.showCounter,
      };
    }
    case "TOGGLE": {
      return {
        ...state,
        count: state.count,
        showCounter: !state.showCounter,
      };
    }
    default: {
      return state;
    }
  }
};
export default counterReducer;
