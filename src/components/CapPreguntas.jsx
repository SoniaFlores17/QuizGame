import ClearListButton from "./ClearListButton";
import ButtonInicio from "./ButtonInicio";
import ListItem from "./ListItem";
import NewItemButton from "./NewItemButton";
import './VentanaJuego.css'


const CapPreguntas = ({
    setPrincipal,
    listItems,
    setListItems,
}) => {

    return (
        <div className="container">

            <div className="row">
                <div className="col text-start"><br />
                    <h1>Agrega Preguntas y las respuestas </h1>
                </div>

            </div>
            <div>
                <div className="d-flex justify-content-between">
                    <NewItemButton
                        listItems={listItems}
                        setListItems={setListItems}
                    />
                    <ButtonInicio
                        setPrincipal={setPrincipal}
                    />
                    <ClearListButton
                        setListItems={setListItems}
                    />


                </div>
            </div>

            <hr />
            {
                listItems.length === 0 && (
                    <div className="text-center">
                        <div className="card container p-3 mt-4 text-center" id="contenedor">
                            <h3>La lista está vacía</h3>
                            Agrega nuevas preguntas.
                        </div>
                    </div>
                )
            }
            {
                listItems.map((cuestionario) => (
                    <div className="card container p-3 mt-4 text-center" id="contenedor">

                    <ListItem
                        cuestionario={cuestionario}
                        listItems={listItems}
                        setListItems={setListItems}
                    /></div>
                ))
            }


           

        </div>
    )
}

export default CapPreguntas

