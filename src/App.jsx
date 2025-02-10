import "./styles.css"
import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import ListaNotas from "./components/ListaNotas"
import Modal from "./components/Modal"


const App = () => {

  const [nota, setNota] = useState({})
  const [notas, setNotas] = useState(JSON.parse(localStorage.getItem('notas')) ?? [])
  const [notaBorrar, setNotaBorrar] = useState(null)
  const [showModal, setShowModal] = useState(false)



  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas))
  }, [notas])

  const confirmarBorrado = (id) => {
    setNotaBorrar(id)
    setShowModal(true)
  }

  const borrar = (id) => {
    const notasFiltradas = notas.filter(nota => nota.id !== notaBorrar)
    setNotas(notasFiltradas)
    setNotaBorrar(null)
  }

  return (
    <>
      <div className="container text-center d-flex align-items-center justify-content-center m-xl-5 m-1 mt-2">
        <div className="row justify-content-center w-100 gap-2">
          <div className="col-md-6 col-lg-3 mt-2 p-1">
            <Formulario notas={notas} setNotas={setNotas} nota={nota} setNota={setNota} />
          </div>
          <div className="col-lg-8 mt-2 p-1">
            <ListaNotas confirmarBorrado={confirmarBorrado} notas={notas} setNota={setNota} nota={nota} />
          </div>

          {showModal && <Modal
            notaBorrar={notaBorrar}
            borrar={borrar}
            cancelar={() => setNotaBorrar(null)}
          />}
        </div>
      </div>
      <footer className="text-center py-3 m-5 border-top fs-6">
        <p className="mb-1">
          Esta es una aplicación sencilla de notas o tareas creada con <strong>React</strong>. Los estilos están hechos con <strong>CSS</strong> y <strong>Bootstrap</strong>.
          <p>
            Las notas se guardan únicamente en el <strong>localStorage</strong> del navegador.
          </p>
        </p>
        <p className="mt-2">
          Hecho con ❤️ por <a href="https://github.com/marialgoliva" target="_blank" rel="noopener noreferrer">María</a>
        </p>
      </footer>
    </>


  )
}

export default App