import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcGoogle } from 'react-icons/fc'


const Registration = () => {
  return (
    <>
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
      >
        <Container>
          <Modal.Body>
            <Form className='text-center px-0 pt-4'> {/*onSubmit={Function()} */}
              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                {/* <Form.Label size='sm' className='user-sel'>
                  Email address
                </Form.Label> */}
                <Form.Control size='sm' type="text" placeholder="Name" id='fname' />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                {/* <Form.Label size='sm' className='user-sel'>
                  Email address
                </Form.Label> */}
                <Form.Control size='sm' type="text" placeholder="Surname" id='lname' />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                {/* <Form.Label size='sm' className='user-sel'>
                  Email address
                </Form.Label> */}
                <Form.Control size='sm' type="email" placeholder="Enter email" id='email' />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                {/* <Form.Label size='sm' className='user-sel'>
                  Password
                </Form.Label> */}
                <Form.Control size='sm' type="password" placeholder="Password" id='pass' />
              </Form.Group>

              <Button variant="outline-success" type="submit">
                Register
              </Button>

              <Form.Group className="mt-2 text-center">
                <Form.Label className='user-sel'>OR</Form.Label>
              </Form.Group>

              <Row className='justify-content-md-center px-5'>
                <Col>
                  <a className='d-flex justify-content-center' href="#">    {/*Update to Link tag --react */}
                    <FcGoogle size={26} />
                  </a>
                </Col>
                <Col>
                  <a className='d-flex justify-content-center' href="#">    {/*Update to Link tag --react */}
                    <FcGoogle size={26} />
                  </a>
                </Col>
                <Col xs>
                  <a className='d-flex justify-content-center' href="#">    {/*Update to Link tag --react */}
                    <FcGoogle size={26} />
                  </a>
                </Col>
              </Row>
            </Form>

          </Modal.Body>
        </Container>
      </Modal>
    </>
  )
}

export default Registration