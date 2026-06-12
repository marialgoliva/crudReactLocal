function Modal({notaBorrar, borrar, cancelar}) {
    if (!notaBorrar) return null
  return (
    <div className="modal show d-block">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Borrar</h5>
          <button type="button" onClick={() => cancelar()} className="btn-close"></button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete it?</p>
        </div>
        <div className="modal-footer">
        <button onClick={cancelar} className="btn btn-secondary">Cancel</button>
        <button onClick={borrar} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal

  
