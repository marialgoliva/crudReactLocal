import { useState } from "react"

const TituloEditable = ({titulo, setTitulo}) => {
    
  return (
    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="tituloEditable" autoFocus/>
  )
}

export default TituloEditable
