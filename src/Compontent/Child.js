import React from 'react';
import "./Child.css";

function Child(props) {
  if(props.isLoggedIn){
    return<h1>Welcome back!</h1>;
  } else{
    return<h1 class="na">Please Login<span class="s">!</span></h1>;
  }
  
}

export default Child;