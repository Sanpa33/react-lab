import { useState } from 'react'
import Contact from './component/Contact'

function App() {

  return (
    <>
      <div className="contacts">
        <Contact
          img="src/images/mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="src/images/fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluffy@catnap.meow"
        />
        <Contact
          img="src/images/felix.png"
          name="Felix"
          phone="(212) 575-2995"
          email="felix@catnap.meow"
        />
        <Contact
          img="src/images/pumpkin.png"
          name="Pumpkin"
          phone="(212) 175-8495"
          email="pumkin@catnap.meow"
        />        
      </div>
    </>
  )
}

export default App
