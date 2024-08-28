import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your Google Client ID

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle login response here
  };

  return (
    <Container fluid className="login-background d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={8} lg={6} xl={4} className="mx-auto">
          <Card className="login-card shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Login
                </Button>
              </Form>
              <div className="text-center my-4">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className="google-login-button"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
