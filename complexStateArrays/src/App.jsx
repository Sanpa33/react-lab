import React from "react"

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
  
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    /**
     * Challenge: you do it!
     * Every time "Add item" is clicked, it should add another string
     * "Test" to the list on the page
     */
    // Esto es asi papurri, prevFavorite thing es el valor actual, en este caso al principio
    // es [] , entonces, la funcion de callback devuelve [...preFavoriteThings], esto se traduce
    // en lo que tiene en ese momento, mass, lo que le pongas a la derecha , en este caso
    // va a sumar muchos Test, Test , Test
    // Entonces
    // 1) El array esta vacio [], al clickear en el boton, agrega "Test"
    // 2) El array tiene contenido ["Test"] , y a eso se le pasa como paraemtro ala funcion
    // 3) Si hicimos click otra vez tendremos ["Test","Test"]
    // setMyFavoriteThings(prevFavoriteThings => [...prevFavoriteThings, "Test"]) ----> Esta es la funcion que hace todo eso :D


    // La funcion final hace algo similiar
    // ...prevFavThings va a guardar los emoticones que ya colocamos
    // y usamos el largo de prevFavThings, osea los que ya guardamos, y usamos ese valor como indice de allFavoriteThings
    // Y cuando tenemos ese valor lo colocamos dentro de allFavoriteThings y lo agregamos a la lista

    setMyFavoriteThings(
        prevFavThings => [
            ...prevFavThings,
            allFavoriteThings[prevFavThings.length]
        ]
    )

  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}