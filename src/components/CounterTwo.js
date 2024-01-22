import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo(){
    const [count,increment,decrement,reset] = useCounter(10)
    console.log(increment)
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick = {increment}>increment</button>
            <button onClick = {decrement}>decrement</button>
            <button onClick = {reset}>Reset</button>
        </div>
    )
}
export default CounterTwo;