import Swal from "sweetalert2"

const ClearListButton = ({ setListItems }) => {

    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: 'Estas de acuerdo?',
            text: "No podrás cambiar esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
        if (isConfirmed) {
            localStorage.setItem("listItems", JSON.stringify([]));
            setListItems([])
        }
    }

    return (
        <button
            className="btn btn-danger me-1"
            onClick={clearList}
            type="button"
        >
            <i className="bi bi-trash2">Borrar</i>
        </button>
    )
}

export default ClearListButton