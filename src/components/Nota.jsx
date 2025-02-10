import { useState } from "react"

const Nota = ({ nota, confirmarBorrado, setNota}) => {
    const{titulo,descripcion,color,fecha,id} = nota
    const [check, setCheck] = useState(false)
    
    
    return (
        
            <tr className="filaNota">
                
                <th  scope="row">{titulo}</th>
                <td><p className="ps-3 rounded" style={{backgroundColor: color + '40' || 'white', textDecoration: check ? 'line-through' : 'none'}}>{descripcion}</p></td>
                <td className="filasExtra">{fecha ? new Date(fecha).toLocaleDateString("es-ES") : ''}</td>
                <td className="filasExtra">
                <button type="button" className="btn" onClick={() => confirmarBorrado(id)}><i className="fas fa-trash"></i></button>
                <button type="button" className="btn" onClick={() => setNota(nota)}><i className="fas fa-edit"></i></button>
                <button type="button" className="btn" onClick={() => setCheck(!check)}><i className={`fa-regular ${check ? 'fa-square-check' : 'fa-square'}`}></i></button>
                </td>
                
                
            </tr>
            
            
        
    )
}

export default Nota
