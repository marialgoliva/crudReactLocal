import { useEffect, useState } from "react"
import Error from "./Error"

const Formulario = ({setNotas, notas, nota, setNota}) => {
    const [titulo, setTitulo] = useState('Tengo que...')
    const [descripcion, setDescripcion] = useState('')
    const [color, setColor] = useState("#98b3d1")
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0])
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        //Validamos campos
        if ([descripcion].includes('')){
            setError(true)
            return
        } else {
            setError(false)
        }
        const obj = {
            titulo,
            descripcion,
            color,
            fecha,
        }
        if(nota.id){
            obj.id = nota.id
            const otros = notas.map(n => n.id === nota.id ? obj : n)
            setNotas(otros)
            
        } else {
            obj.id = getId()
            setNotas([...notas, obj])
        }
        limpiarCampos()
    }

    const getId = () => {
        let id = (Math.random().toString(36).substring(2) + Date.now().toString(36))
        return id
    }

    const limpiarCampos = () => {
        setTitulo('Tengo que...')
        setDescripcion('')
        setColor("#98b3d1")
        setFecha(new Date().toISOString().split('T')[0])
        setError(false)
        setNota({})
    }

    useEffect(()=>{
        if (nota.id && nota.id!==''){
            setTitulo(nota.titulo)
            setDescripcion(nota.descripcion)
            setColor(nota.color)
            setFecha(nota.fecha)
        }
    },[nota])


    return (
        
            <form onSubmit={handleSubmit}>
                <div className="card pt-2">
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="tituloEditable" autoFocus/>
                    {
                        error && <Error mensaje='La descripción es obligatoria.'/>
                    }
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <textarea type="text" className="form-control" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} placeholder="Descripción" rows="4"/>
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-around">
                            <label htmlFor="colorInput" className="col-form-label fs-6 w-25">Color</label>
                            <input type="color" className="form-control form-control-color" id="colorInput" value={color} onChange={(e)=>setColor(e.target.value)} />
                        </div>
                        <div className="input-group mb-3 d-flex">
                        <label htmlFor="colorInput" className="col-form-label fs-6 w-100 text-start">Fecha de finalización</label>
                            <input type="date" className="form-control" value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
                        </div>
                    
                        <div className="d-flex justify-content-end ">
                            <button type="submit" className="btn" >{
                        nota.id ? 'Editar' : 'Guardar'}</button>
                            <button onClick={limpiarCampos} type="button" className="btn my-2">Borrar</button>
                        </div>
                    </div>
                </div>
            </form>
            

        
    )
}

export default Formulario