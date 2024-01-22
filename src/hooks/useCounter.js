import { useState } from "react";

function useCounter(initialCount = 0){
    const [count, setCount] = useState(initialCount)

    const increment =()=>{
        console.log("Increment is called")
        setCount(prevState =>prevState+1)
    }
    const decrement =()=>{
        console.log("Increment is called")
        setCount(prevState =>prevState-1)
    }
    const reset =()=>{
        console.log("Increment is called")
        setCount(0)
    }
    console.log(count)
    return [count,increment,decrement,reset]
}
export default useCounter;