import './VentanaJuego.css'

const FinalJuego = ({ setPrincipal, listItems, acierto, setAcierto }) => {

    return (
        <div className='game-container my-component'>

            <main className="app d-flex justify-content-evenly">
                <div className='juego-terminado d-grid col-6 mx-auto'>
                    <span>
                        {" "}
                        Obtuviste {acierto} de {listItems.length}{" "}preguntas
                    </span>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPrincipal('Game'); setAcierto(0); }}
                        className='btn btn-info '
                    >
                        Jugar de nuevo
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPrincipal('Answers'); setAcierto(0); }}
                        className='btn btn-info'
                    >
                        Ver respuesta
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPrincipal('Home'); setAcierto(0); }}
                    >
                        Inicio
                    </button>

                </div>
            </main>

        </div>
    )
}

export default FinalJuego