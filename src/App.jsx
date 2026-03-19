import { useState, useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const modalRef = useRef(null);
  const bsModal = useRef(null);

  useEffect(() => {
    bsModal.current = new Modal(modalRef.current);
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={() => bsModal.current.show()}>
          Launch demo modal
        </button>
        <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
