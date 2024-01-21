import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";


function Parents(){
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(15000);

    const incrementAge = useCallback(() =>{
        setAge(age+1);
    },[age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary+3000)
    },[salary])

    return(
        <div>
            <Title/>
            <Count text = {"Age"} count = {age}/>
            <Button handleClick = {incrementAge}>Increment Age</Button>
            <Count text = {"Salary"} count = {salary}/>
            <Button handleClick = {incrementSalary}>Increment Salary</Button>
        </div>
    )
}
export default Parents;