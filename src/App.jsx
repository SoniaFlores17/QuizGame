import { useState } from "react";
import './components/VentanaJuego.css'
import PagPrincipal from "./components/PagPrincipal";
import CapPreguntas from "./components/CapPreguntas";
import JugarJuego from "./components/JugarJuego";
import FinalJuego from "./components/FinalJuego";
import VerPuntuacion from "./components/VerPuntuacion";


function App() {
  const [principal, setPrincipal] = useState('Home')
  const [acierto, setAcierto] = useState(0);

  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  )

  return (

    <div className="container mt-2">

      {
        principal === 'Home' && (
          <div>
            <PagPrincipal
              setPrincipal={setPrincipal}
            />
          </div>
        )
      }

      {
        principal === 'Capture' && (
          <div>
            <CapPreguntas
              setPrincipal={setPrincipal}
              listItems={listItems}
              setListItems={setListItems}
            />
          </div>
        )
      }

      {

        principal === 'Game' && (
          <div>
            <JugarJuego
              principal={principal}
              setPrincipal={setPrincipal}
              listItems={listItems}
              acierto={acierto}
              setAcierto={setAcierto}
            />
          </div>
        )
      }

      {
        principal === 'Finish' && (
          <div>
            <FinalJuego
              setPrincipal={setPrincipal}
              listItems={listItems}
              acierto={acierto}
              setAcierto={setAcierto}
            />
          </div>
        )
      }

      {
        principal === 'Answers' && (
          <div>
            <VerPuntuacion
              setPrincipal={setPrincipal}
              listItems={listItems}
            />
          </div>
        )
      }

    </div>
  )
}

export default App