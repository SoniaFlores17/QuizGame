import './ButtonHome.css'
import Swal from "sweetalert2"
const PagPrincipal = ({ setPrincipal }) => {


    return (

        <div>
            <br /><br /><br /><br /><br /><br /><br />
            <h1
                style={{
                    textAlign: "center"
                }}
            >Quiz Game</h1>
            <br />
            <div>
                <button
                    type="button"
                    className="boton1 mx-auto"
                    onClick={() => setPrincipal('Game')}

                ><span>Jugar</span></button> <br />
                <button
                    type="button "
                    className='boton2 mx-auto'
                    onClick={() => setPrincipal('Capture')}
                ><span>Agrega de preguntas</span></button>
                
                

            </div>

        </div>


    )
}

export default PagPrincipal