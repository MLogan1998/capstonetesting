import React from 'react'; 
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './InfoModal.css';

function InfoModal(props) {
  return (
    <Modal show={props.modalShow} onHide={props.handleModalClose} className="modal-container">
      <Modal.Body className="modal-body">
        <h3 className="pro__name">{props.pro.project_name}</h3>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="primary" onClick={props.handleModalClose}>Update</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InfoModal
