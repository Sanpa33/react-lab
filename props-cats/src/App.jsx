import { useState } from 'react'
import Contact from './component/Contact'

import MrWhiskerson from './images/mr-whiskerson.png'
import Fluffykins from './images/fluffykins.png'
import Felix from './images/felix.png'
import Pumpkin from './images/pumpkin.png'


function App() {

  return (
    <>
      <div className="contacts">
        <Contact
          img={MrWhiskerson}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img={Fluffykins}  
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluffy@catnap.meow"
        />
        <Contact
          img={Felix}
          name="Felix"
          phone="(212) 575-2995"
          email="felix@catnap.meow"
        />
        <Contact
          img={Pumpkin}
          name="Pumpkin"
          phone="(212) 175-8495"
          email="pumkin@catnap.meow"
        />        
      </div>
    </>
  )
}

export default App
