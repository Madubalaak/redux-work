import React ,{useEffect}from "react";
import { connect } from "react-redux";
import {fetchUsers} from "./features/counterLogic/counterAction";

function App  ({userData,fetchUsers})  {
  const users=userData.users;
 const loading=userData.loading;
 const error=userData.error;

  useEffect(() => {
  fetchUsers();
  }, []);
  return (
    <div>
       <h1>User Information</h1>
      {loading && <h2>loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user,i)=><h3 key={i}>{user.name}</h3>)}
    </div>
  );
};
const mapStateToProps=(state)=>{
  return{
    userData:state.users
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    fetchUsers:()=>dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

// import Counter from "./features/counterLogic";
// import React from 'react';
// import './index.css';
// function App()
// {
//   return(
//    <div>
//      <Counter/>
//      </div>
//   );
// }
// export default App;