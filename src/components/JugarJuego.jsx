import './VentanaJuego.css'

import ButtonInicio from './ButtonInicio';


import { useEffect, useState } from 'react';


const JugarJuego = ({ principal, setPrincipal, listItems, acierto, setAcierto }) => {


    const [consultaReal, setConsultaReal] = useState(0);
    const [terminado, setTerminado] = useState(false);
    const [temp, setTemp] = useState(10);
    const [disable, setDisable] = useState(false);

    const handleAnswerSubmit = (e) => {
        if (e.target.value === listItems[consultaReal].answerTrue) {
            setAcierto(acierto + 1);
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("incorrect");
        }


        setTimeout(() => {
            if (consultaReal === listItems.length - 1) {
                setTerminado(true);
                setPrincipal('Finish');
            } else {
                setConsultaReal(consultaReal + 1);
                setTemp(11);
            }
            e.target.className = '';
        }, 1000);
    }

    const handleVerity = () => {
        if (consultaReal === listItems.length - 1) {
            setTerminado(true);
            setPrincipal('Finish');
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (temp > 0) setTemp((prev) => prev - 1);
            if (temp === 0) setDisable(true);
        }, 1000);
        return () => clearInterval(intervalo);
    })

    return (


        <div className='game-container my-component'>

            {
                principal === 'Game' && (
                    <div>

                        <div>
                            <div >
                                <span className="tiempo-restante  d-flex justify-content-center text-center">Tiempo: {temp}{" "}!!!</span>
                            </div><br />
                        </div>

                        <div className='d-flex justify-content-center'>

                            <div className="">
                                <ButtonInicio
                                    setPrincipal={setPrincipal}
                                />
                            </div>
                        </div><br />
                        <main className="app">
                            <div className="lado-izquierdo">
                                <center>
                                    <div className="numero-pregunta">
                                        <span className='pregunta'>Pregunta {consultaReal + 1} de  {listItems.length}</span>
                                    </div></center><br />

                                <div className="titulo-pregunta">{listItems[consultaReal].pregunta}</div>
                                <br />

                            </div>

                            <div className="d-flex justify-content-evenly">

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listItems[consultaReal].opcion1}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                    className='btn btn-warning'
                                >
                                    {listItems[consultaReal].opcion1}
                                </button>

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listItems[consultaReal].opcion2}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                    className='btn btn-success'
                                >
                                    {listItems[consultaReal].opcion2}
                                </button>

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listItems[consultaReal].opcion3}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                    className='btn btn-info'
                                >
                                    {listItems[consultaReal].opcion3}
                                </button>
                            </div>

                         
                            <br />


                        </main>
                    </div>

                )
            }

        </div>
    )
}


export default JugarJuego