import { useState } from "react";

function Calculator()
{
    let [value1,setValue1] = useState("");

    let [value2,setValue2] = useState("");

    let [result,setValue3] = useState("");

    let updateValue1 = (e)=> setValue1(()=>parseInt(e.target.value))

    let updateValue2 = (e)=> setValue2(()=>parseInt(e.target.value))

    let add = (e) => setValue3(()=>value1+value2)

    let sub = (e) => setValue3(()=>value1-value2)

    let mul = (e) => setValue3(()=>value1*value2)

    let div = (e) => setValue3(()=>value1/value2)

    let per = (e) => setValue3(()=>((value1)*(value2))/100)

    return (
        <div>
            
            <h1 className="head">Calculator</h1>

            <h2> Result:{result} </h2>
           
            <div>
            
                <input type="number" placeholder="Enter value "  onChange={updateValue1} />
             
                <input type="number" placeholder="Enter value "  onChange={updateValue2} />

            </div>

            <br /><br />

            <button onClick={add}>Add</button>

            <button onClick={sub}>Subtract</button>

            <button onClick={mul}>Multiply</button>

            <button onClick={div}>Division</button>

            <button onClick={per}>Percentage</button>

        </div>  
    )
}

export default Calculator;
