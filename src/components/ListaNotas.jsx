import Nota from "./Nota"

const ListaNotas = ({ notas, confirmarBorrado, setNota }) => {
  return (
    
      <div className="card lista">
        <div className="card-header text-center ps-4 listaTitle">
          Lista de tareas
        </div>
        <div className="card-body">
          <table className="table">
            <tbody>
              {notas && notas.length
                ? (
                  notas.map((nota, index) => (
                    <Nota confirmarBorrado={confirmarBorrado} key={index} nota={nota} setNota={setNota} />))
                ) : (
                  <tr>
                    <th colSpan={5} scope="row"><h3>No hay notas guardadas</h3></th>
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
