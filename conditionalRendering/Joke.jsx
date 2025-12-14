import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}

            {isShown ? <p>{props.punchline}</p> : null}

            <button onClick={toggleShown}>{isShown ? "Hide puchline" : "Show puchline"}</button>
            
            <hr />
        </div>
    )
}