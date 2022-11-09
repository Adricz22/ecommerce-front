import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isError, isLoading, error }] = useLoginMutation();
  function handleLogin(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ witdh: "100%" }} onSubmit={handleLogin}>
            <h1>Login to your account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}

            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={({ target }) => setEmail(target.value)}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={({ target }) => setPassword(target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit" disabled={isLoading}>
                Login
              </Button>
              <>
                Don't have an account? <Link to="/signup">Create account</Link>{" "}
              </>
            </FormGroup>
          </Form>
        </Col>
        <Col md={6} className="login__image--container"></Col>
      </Row>
    </Container>
  );
}

export default Login;
