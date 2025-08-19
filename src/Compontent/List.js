import React from 'react'
import "./List.css";
// function List() {
//      const fruits = ["Apple", "Banana", "Mango"];
//      const colors =["Red","Green","Pink"];
//   return (
//     <div>
//        <ul>
//         <h1>Fruits</h1>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li> 
//       ))}
//       <h1>Colors</h1>
//       {colors.map((colors,index)=>(
//         <li key={index}style={{color:colors}}>{colors}</li>
//       ))}
//      </ul>
//     </div>
//   )
// }

// export default List

function List() {
  return (

    <form  >
       <div>
      <label  className="last">Enteryour name:  <input type="text" />   </label>
      </div>

        <label  >Enter last name <input type="text"/></label>
         <label  >Mobile number <input type="number"/></label> 
   
      
    </form>
 
  )
}

export default List

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<List/>);

