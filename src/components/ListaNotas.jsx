import Nota from "./Nota"

const ListaNotas = ({ notas, confirmarBorrado, setNota, cambiarEstado }) => {
  return (
    
      <div className="card lista">
        <div className="card-header text-center ps-4 listaTitle">
          To-do list
        </div>
        <div className="card-body">
          <table className="table">
            <tbody>
              {notas && notas.length
                ? (
                  notas.map((nota, index) => (
                    <Nota 
                    confirmarBorrado={confirmarBorrado} 
                    key={nota.id || index} 
                    nota={nota} 
                    setNota={setNota} 
                    cambiarEstado={cambiarEstado} 
                    />))
                ) : (
                  <tr>
                    <th colSpan={5} scope="row"><h3>There aren&apos;t notes yet</h3></th>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    
  )
}

export default ListaNotas
