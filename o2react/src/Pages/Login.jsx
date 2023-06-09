import React from 'react'
import { Button, Col, Container, Form, Modal, ModalFooter, Row } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
const Login = () => {
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
                <Form.Label className='user-sel'>
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" id='email' />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label className='user-sel'>
                  Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" id='pass' />
              </Form.Group>

              <Button variant="outline-success" type="submit">
                Login
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

export default Login