export const onIncrease = () => {
  return { type: "INCREASE" };
};
export const onDecrease = () => {
  return({ type: "DECREASE" });
};
export const onIncreaseByFive = () => {
  return({ type: "INCREASE_BY_FIVE" });
};
export const onToggle = () => {
  return({ type: "TOGGLE" });
};

const getUsersRequest=()=>{
  return{
    type:"GET_USERS_REQUEST"
  };
}
const getUsersSuccess=(users)=>{
  return{
    type:"GET_USERS_SUCCESS",
    payload:users
  };
}
const getUsersFailure=(error)=>{
  return{
    type:"GET_USERS_FAILURE",
    payload:error
  };
}

const url="https://jsonplaceholder.typicode.com/users";

export const fetchUsers=()=>{
  return(dispatch)=>{
    dispatch(getUsersRequest());
     fetch(url,
      {
        method:"GET"
      }).then(response=>response.json())
      .then(data=>{
        const users=data;
        dispatch(getUsersSuccess(users));
      })
      .catch(error=>{
        const errorMessage=error.message;
        dispatch(getUsersFailure(errorMessage));
      })
  }
}
