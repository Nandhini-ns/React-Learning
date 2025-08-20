
import UserContext from "./UserContext";
import React,{useContext} from "react";


function Child() {
  const user = useContext(UserContext);
  return <h1 style={{textAlign:"center",marginTop:"50px",background:"yellow"}}>Welcome, {user}!</h1>;
}

function Capp() {
  return (
    <UserContext.Provider value="NandhiniNadimuthu">
      <Child />
    </UserContext.Provider>
  );
}

export default Capp;
