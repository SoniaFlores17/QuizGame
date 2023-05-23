import './VentanaJuego.css'
import { useEffect, useState } from 'react';

const VerPuntuacion = ({ setPrincipal, listItems }) => {
    const [consultaReal, setConsultaReal] = useState(0);
    const [terminado, setTerminado] = useState(false);

    const handleVerity = () => {
        if (consultaReal === listItems.length - 1) {
            setTerminado(true);
            setPrincipal('Home');
        } else {
            setConsultaReal(consultaReal + 1);
        }
    }

    return (
        <div className='game-container my-component'>

            <main className="app">
                <div className="lado-izquierdo">
                    <div className="numero-pregunta">
                        <span>Pregunta {consultaReal + 1} de{listItems.length}</span>
                    </div><br />
                    <div className="tex-center">
                        {listItems[consultaReal].pregunta}
                    </div>
                    <div className="tex-center">R=
                        {listItems[consultaReal].answerTrue}
                    </div><br />
                    <button type="button" onClick={() => handleVerity()} className='btn btn btn-primary'> 
                        Continuar
                    </button>
                </div>
            </main>

        </div>
    )
}

export default VerPuntuacion