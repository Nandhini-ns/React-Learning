// // import React from 'react'

// // function Context() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default Context


// import React, { createContext, useContext } from "react";

// // Context create pannrom
// const UserContext = createContext();

// function Child() {
//   // useContext la UserContext call pannrom
//   const user = useContext(UserContext);
//   return <h1>Welcome, {user}!</h1>;
// }

// function App() {
//   return (
//     // Context provider la value pass pannrom
//     <UserContext.Provider value="Nandhini">
//       <Child />
//     </UserContext.Provider>
//   );
// }

// export default App;

import {createContext} from "react";

const UserContext =createContext();

export default UserContext;
