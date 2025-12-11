import { use, useState } from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut , setIsGoingOut] = useState(true)

    console.log(isGoingOut)

    function handleClickButton() {
      setIsGoingOut(prevState => !prevState)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button
             onClick={handleClickButton}
             className="value"
             aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`} // Esto es para accesibilidad de gente con discapacidad
             >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
