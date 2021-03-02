import React, { useEffect } from 'react'; 
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './InfoModal.css';

function InfoModal(props) {

  useEffect(() => {
    console.log(props.pro)
  }, [])

  return (
    <Modal show={props.modalShow} onHide={() => props.handleModalClose(props.pro.id) } className="modal-container">
      <Modal.Body className="modal-body">
        <h3 className="pro__name">{props.pro.project_name}</h3>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="primary" onClick={() => props.handleModalClose(props.pro.id) }>Update</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InfoModal
