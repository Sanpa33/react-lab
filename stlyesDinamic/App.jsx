import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

// Este projecto esta galacticardo es buenardo

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    function toggle(id) {
        console.log(id)
        /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */

        setPads(prevPads => prevPads.map(pad => (
            pad.id === id ? { ...pad, on: !pad.on } : pad
        )));
    }

    function turnOff() {
        setPads(prevPads => prevPads.map(pad =>(
            pad.on = true ? { ...pad, on: false } : pad
        )));
    }
    
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <br></br>
            <button onClick={turnOff}>Turn off all pads</button>
        </main>
    )
}
