import Joke from "./Joke"
import jokesData from "./jokesData.js"


export default function App() {

    const jokeElements = jokesData.map( (joke) =>
        <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    )

    return (
        <main>
            {jokeElements}
        </main>
    )
}
