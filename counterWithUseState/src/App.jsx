import React from "react"
import { useState } from 'react';
import Count from "./count.jsx"


export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [counter, setCounter] = useState(0)

    // Nota (1) teorica increible, si vos al momento de crear las variables de useState usas const, tiene sentido
    // Por que, yo antes lo hice con let para cambiar los valores de counter usando los operadores ++ y --
    // y eso en el dom, funciona pero es superr, lento , lo que hay que hacer en cambio es
    // dejar que la funcion setCounter haga su trabajo ella toma el parametro nuevo que va a tener y redefine la variable
    // entonces no es necesario incrementar con los operadores logicos ++ y -- , solo usando la variable que queremos actualizar
    // sumando o restando lo que queramos y pasando ese valor a la funcion, ES MUCHISIMO MAS RAPIDO

    // function decreseCounter() {
    //   if(counter > 0){
    //   setCounter(counter - 1) 
    //   }
    // }

    // function increaseCounter() {
    //   setCounter(counter + 1)
    // }

    // Nota 2
    //  * Note: if you ever need the old value of state
    //  * to help you determine the new value of state,
    //  * you should pass a callback function to your
    //  * state setter function instead of using
    //  * state directly. This callback function will
    //  * receive the old value of state as its parameter,
    //  * which you can then use to determine your new
    //  * value of state.

  function add() {
    setCounter(prevCounter => prevCounter + 1)
  }

  function subtract() {
    setCounter(prevCounter => prevCounter - 1)
  }


    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={subtract} className="minus" aria-label="Decrease count">–</button>
                <Count number={counter} />
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}



// Preguntas teoricas de react de este tema

// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
//    1. Pass the new version of state that we want to use as the 
//       replacement for the old version of state.
//    2. Pass a callback function. Must return what we want the new
//       value of state to be. Will receive the old version of state
//       as a parameter so we can use it to help determine what we want 
//       the new value of state to be.


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
   
//    Whenever we don't really care about (or need) the old value,
//    we simply want to set a new value.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?

//    Whenever we do care about the previous value in state and need
//    it to help us determine what the new value should be.
