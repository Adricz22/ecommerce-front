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
import "./Signup.css";
import { useSignupMutation } from "../services/appApi";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, { isLoading, error, isError }] = useSignupMutation();

  function handleSignup(e) {
    e.preventDefault();
    signup({ name, email, password });
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="signup__form--container">
          <Form style={{ width: "100%" }} onSubmit={handleSignup}>
            <h1>Create an account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}

            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Your name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit" disabled={isLoading}>
                Create account
              </Button>
            </FormGroup>
            <p className="pt-3 text-center">
              Don't have an account? <Link to="/login">Login</Link>{" "}
            </p>
          </Form>
        </Col>
        <Col md={6} className="signup__image--container"></Col>
      </Row>
    </Container>
  );
}

export default SignUp;
