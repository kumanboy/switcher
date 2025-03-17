import { useState} from "react";

const Counter = () => {
    const [count, setCount] = useState([{count:0}]);
    const increaseCount = () => {
        setCount(count.map((item)=>({...item, count:item.count++})))
    }
    return (
        <div>
            {count.map((item)=>(<li>{item.count}</li>))}
                <button onClick={increaseCount}>+</button>
        </div>
    )
}
export default Counter
