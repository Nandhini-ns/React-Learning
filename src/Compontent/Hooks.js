
import React,{useState,useEffect} from "react";
import "./Hooks.css";
function Counter(){
    const[count, setCount]=useState(0);
    useEffect(()=>{
        console.log("Count updated:" , count);
        document.title=`Count:${count}`;
    },[count]);
    return(
        <div>
            <p style={{textAlign:"center",fontWeight:"bold",fontSize:"15px"}}>Count:{count}</p>
            <div className="btn-container">
             <button onClick={() => setCount(count + 1)} className="bt btn-inc">Increase</button>
             <button onClick={() => setCount(count - 1)} className="bt btn-dec">Decrement</button>
             </div>
        </div>
    );
}
export default Counter;