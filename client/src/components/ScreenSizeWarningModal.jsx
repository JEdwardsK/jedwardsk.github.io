import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ScreenSizeWarningModal = ({ show, handleShow }) => {
  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Dialog style={{ border: 'none', margin: 0 }}>
        <Modal.Header closeButton>
          <Modal.Title>Small Screen</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <p>It appears you are using a device with a small screen. For a better experience a larger device is recommended.</p>
        </Modal.Body>
  
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}

export default ScreenSizeWarningModal
