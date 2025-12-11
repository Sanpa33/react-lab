import ReactDOM from 'react-dom/client';

export default function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function handleMouseOver() {
    console.log("I was hovered over!")
  }

  /**
   * Challenge: add our new function to the button
   */

    /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image
   */
  

  return (
    <main className="container">
      <img 
        onMouseOver={handleMouseOver}
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={handleClick}  >Click me</button>
    </main>
  )
}
