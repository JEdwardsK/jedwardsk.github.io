import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/esm/Modal'
import Button from 'react-bootstrap/esm/Button'
import MySkills from '../MySkills'


const SkillsModal = ({ isVisible }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setIsModalVisible(isVisible)
  }, [isVisible])
  const handlCloseModal = () => setIsModalVisible(false)


  return (
    <Modal
      show={isModalVisible}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handlCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Skills/Technologies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MySkills/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handlCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SkillsModal
