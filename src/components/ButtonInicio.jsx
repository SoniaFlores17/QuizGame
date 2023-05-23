const ButtonInicio= ({setPrincipal}) => {
    return (
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPrincipal('Home')}
            > 
                <i className="bi bi-house"> Inicio</i>
            </button>
    )
}

export default ButtonInicio