import Swal from "sweetalert2"


const ListItem = ({
    cuestionario,
    listItems,
    setListItems
}) => {
    const { id, pregunta, opcion1, opcion2, opcion3, answerTrue  } = cuestionario;

    const deleteListItem = () => {
        const newList = listItems.filter(cuestionario => cuestionario.id !== id)
        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems(newList);
    }



const editListItem = async () => {
    const { value } = await Swal.fire({
        title: "Escribe la pregunta y las respuestas",
        html: `
                <input 
                    type="text"
                    id="pregunta" 
                    name="pregunta" 
                    placeholder="Cuestionario"
                    class="swal2-input"
                    value="${pregunta}"
                />
                <input 
                    type="text" 
                    id="opcion1" 
                    name="opcion1"
                    placeholder="Respuesta 1"
                    class="swal2-input"
                    value="${opcion1}" 
                />
                <input 
                    type="text" 
                    id="opcion2" 
                    name="opcion2"
                    placeholder="Respuesta 2"
                    class="swal2-input"
                    value="${opcion2}" 
                />
                <input 
                type="text" 
                id="opcion3" 
                name="opcion3"
                placeholder="Respuesta 3"
                class="swal2-input"
                value="${opcion3}" 
            />
            <select id="answerSelect" class="swal2-input">
            <option value="">Selecciona la respuesta correcta</option>
            <option value="opcion1">Pregunta 1</option>
            <option value="opcion2">Pregunta 2</option>
            <option value="opcion3">Pregunta 3</option>
            </select>


            `,
        confirmButtonText: "Continuar",
        showCancelButton: true,
        cancelButtonText: "Salir",
        focusConfirm: false,
        preConfirm: () => {
            const pregunta = Swal.getPopup().querySelector("#pregunta").value;
            const opcion1 = Swal.getPopup().querySelector("#opcion1").value;
            const opcion2 = Swal.getPopup().querySelector("#opcion2").value;
            const opcion3 = Swal.getPopup().querySelector("#opcion3").value;
            const unit = Swal.getPopup().querySelector("#answerSelect").value;
            
            if (!pregunta || !opcion1 || !opcion2 || !opcion3 || !unit) {
                Swal.showValidationMessage("Oh oh te falta algo, intentalo de nuevo");
            }
            return { pregunta, opcion1, opcion2, opcion3, unit };
        },
    })

    if (!value.pregunta || !value.opcion1 || !value.opcion2 || !value.opcion3 || !value.unit) return;

    let trueAnswer;
    if (value.unit === 'opcion1') {
        trueAnswer = value.opcion1;
      }
    if (value.unit === 'opcion2') {
        trueAnswer = value.opcion2;
      }
      
    if (value.unit === 'opcion3') {
        trueAnswer = value.opcion3;
      }


    const newList = listItems.map((cuestionario) => {
        if (cuestionario.id === id) {
            cuestionario.pregunta = value.pregunta;
            cuestionario.opcion1 = value.opcion1;
            cuestionario.opcion2 = value.opcion2;
            cuestionario.opcion3 = value.opcion3;
            cuestionario.answerTrue = trueAnswer;
        }
        return cuestionario;
    })
    localStorage.setItem("listItems", JSON.stringify(newList));
    setListItems(newList);
}

return (
    <div className="row text-center aling-items-center mt-4">

         <div className="col"><h4>Pregunta</h4> <br /><br />{pregunta}</div>
        

        <div className="col-3 col-md-3"><h4>Opciones</h4>
            <strong>1.</strong> {opcion1}<br />
            <strong>2.</strong> {opcion2}<br />
            <strong>3.</strong> {opcion3}
        </div>


        <div className="col-3 col-md-3"><h4>Respuesta <br /><br /> <br /></h4>{answerTrue}</div>

        <div className="col-4 col-md-2" role="group">

            <button
                type="button"
                class="btn btn-outline-primary m-4"
                onClick={editListItem}
            >
                <i class="bi bi-pencil-square"></i>
            </button>

            <button
                type="button"
                class="btn btn-outline-danger"
                onClick={deleteListItem}
            >
                <i class="bi bi-trash2-fill"></i>
            </button>

        </div>

    </div >
    )
}

export default ListItem