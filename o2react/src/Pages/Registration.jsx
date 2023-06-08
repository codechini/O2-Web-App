import React from 'react'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import Modal from 'react-bootstrap/Modal'


const Registration = () => {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
      >
        <Container>
          <Modal.Body>
            <Form className='text-center px-5'> {/*onSubmit={Function()} */}
              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id='email' />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  )
}

export default Registration