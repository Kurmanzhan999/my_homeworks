import React,{useState} from "react";
import './Counter.css'

function CounterSum (){
    const homePosition = 0
    const [count,setCount] = useState(homePosition)
    return (
        <div>
            <h3> Click buttons " + "   and " - "  </h3>
            <h4>Click "Remove" to clean all</h4>
            Count:  {count}
            <button onClick={()=>setCount(homePosition)}>Remove</button>
            <button onClick={()=>setCount(count - 1)}> - </button>
            <button onClick={()=>setCount(count + 1)}> + </button>
        </div>
    )
}
export default CounterSum;

// "Ал компонентти томондогу видеодой жумушту аткарыш керек "" - видеону таппадым.
// Бирок ушундай кылдым.