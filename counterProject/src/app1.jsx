import { useEffect } from "react";
import React from "react";
import './App.css';

function App(){
    
    const [counter,setCounter] = useEffect(15);
    
    const addVAlue = () => {
        setCounter(previousCounter => previousCounter + 1);
        setCounter(previousCounter => previousCounter + 1);
        setCounter(previousCounter => previousCounter + 1);
        setCounter(previousCounter => previousCounter + 1);
        setCounter(previousCounter => previousCounter + 1);

        const removeValue =()=>{
            setCounter(counter -1);
        }
    
        return (
            <>
        <body className="bg-red">
            
        </body>
        <h1>Add Value{counter}</h1>    
        <h1>Remove Value{counter}</h1>    
        
        <button onClick={addVAlue}>Add value:{counter}</button>
        <button onClick={removeValueVAlue}>Remove value:{counter}</button>
            </>
        )
    }
}

