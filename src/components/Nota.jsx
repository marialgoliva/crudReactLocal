import { useState } from "react"

const Nota = ({ nota, confirmarBorrado, setNota, cambiarEstado }) => {

    const { titulo, descripcion, color, fecha, id, state } = nota

    return (

        <tr className="filaNota">

            <th scope="row">{titulo}</th>

            <td>
                <p 
                className="ps-3 rounded" 
                style={
                    { 
                        backgroundColor: color + '40' || 'white', 
                        textDecoration: state ? 'line-through' : 'none' }
                }
                >
                    {descripcion}
                </p>
            </td>
            <td className="filasExtra">
                {fecha ? new Date(fecha).toLocaleDateString("es-ES") : ''}
            </td>
            <td className="filasExtra">
                <button type="button" className="btn" onClick={() => confirmarBorrado(id)}><i className="fas fa-trash"></i></button>
                <button type="button" className="btn" onClick={() => setNota(nota)}><i className="fas fa-edit"></i></button>
                <button type="button" className="btn" onClick={() => cambiarEstado(id)}><i className={`fa-regular ${state ? 'fa-square-check' : 'fa-square'}`}></i></button>
            </td>


        </tr>



    )
}

export default Nota
