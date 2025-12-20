import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

// Este projecto esta galacticardo es buenardo

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    function toggle(id) {

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
