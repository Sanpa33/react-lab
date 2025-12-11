import React from "react"
import "./App.css"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    /**
     * Challenge 2: 
     * Create a function called `add` that runs
     * when the + button is clicked. (Can just console.log("add") for now)
     */

    const [count, setCount] = React.useState(0)

    // This is better!

    const add = () => {
        setCount(prevCount => prevCount + 1)
    }

    const subtract = () => {
        setCount(prevCount => prevCount - 1)
    }

    //  const add = () => {
    //     setCount(count + 1)
    // }

    // const subtract = () => {
    //     setCount(count - 1)
    // }   


    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={subtract} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
