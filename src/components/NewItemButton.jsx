import Swal from "sweetalert2"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const NewItemButton = ({ listItems, setListItems }) => {
    const NewItemModal = async () => {
        
        const { value } = await Swal.fire({
            title: "Escribe la pregunta y las respuestas",
            html: `
                <input 
                    type="text"
                    id="pregunta" 
                    name="pregunta" 
                    placeholder="Pregunta"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="opcion1" 
                    name="opcion1"
                    placeholder="Opcion 1"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="opcion2" 
                    name="opcion2"
                    placeholder="Opcion 2"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="opcion3" 
                    name="opcion3"
                    placeholder="Opcion 3"
                    class="swal2-input"
                />
                <select id="answerSelect" class="swal2-input">
                <option value="">Selecciona la respuesta correcta</option>
                <option value="opcion1">Opcion 1</option>
                <option value="opcion2">Opcion 2</option>
                <option value="opcion3">Opcion 3</option>
                </select>
            `,
            confirmButtonText: "Continuar",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            focusConfirm: false,
            preConfirm: () => {
                const pregunta = Swal.getPopup().querySelector("#pregunta").value;
                const opcion1 = Swal.getPopup().querySelector("#opcion1").value;
                const opcion2 = Swal.getPopup().querySelector("#opcion2").value;
                const opcion3 = Swal.getPopup().querySelector("#opcion3").value;
                const unit = Swal.getPopup().querySelector("#answerSelect").value;

                if (!pregunta || !opcion1 || !opcion2 || !opcion3 || !unit) {
                    Swal.showValidationMessage("Oh oh algo hace falta, vuelve a intentar...");
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
        const newList = [
            ...listItems,
            {
                id: uuidv4(),
                pregunta: value.pregunta,
                opcion1: value.opcion1,
                opcion2: value.opcion2,
                opcion3: value.opcion3,
                answerTrue: trueAnswer,
            }
        ]

        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems(newList);
    }

    return (
        <button
            type="button"
            className="btn btn-success me-1"
            onClick={NewItemModal}
        >
            <i className="bi bi-plus-circle"> Agregar</i>
        </button>
    )

}

export default NewItemButton