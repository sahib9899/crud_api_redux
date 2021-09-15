import React, { useState } from "react";
import Display from "./display";
import { Button, Container, Row } from "react-bootstrap";
import { loginUser, registerUser } from "../actions";
import { connect } from "react-redux";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Register = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [login, setLogin] = useState({ email: "", password: "" });

  console.log("newuser", props.newUser);

  const regToken = props.newUser.token;
  const loginToken = props.loginData.data;

  localStorage.setItem("RegisterToken", regToken);
  // localStorage.setItem("LoginToken", loginToken);

  // console.log("tokens", regToken);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerUser({ data });
    setData({ email: "", password: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    props.loginUser({ login });
    setLogin({ email: "", password: "" });
  };

  return (
    <div>
      <div>
        <Container>
          <form>
            <Row className="mt-5 justify-content-md-left" xs mt="3" lg="3">
              <input
                type="text"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Enter Email"
              ></input>
            </Row>
            <Row className="mt-2 justify-content-md-left" xs lg="3">
              <input
                type="text"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="Enter Password"
              ></input>
            </Row>
            <Row className="mt-2 justify-content-md-left" mt-3 xs lg="5">
              <Button onClick={handleSubmit}>Register</Button>
            </Row>
            {regToken == undefined ? (
              <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3"> </Row>
            ) : (
              <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
                <font color="green">  Registered Succesfully. Login to enter.</font>
              </Row>
            )}
          </form>
        </Container>
      </div>

      <div>
        <Container>
          <Row className="mt-5 justify-content-md-left" xs mt="3" lg="3">
            already a user? then Login below
          </Row>
          <Row className="mt-2 justify-content-md-left" xs mt="3" lg="3">
            <input
              type="text"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              placeholder="Enter Email"
            ></input>
          </Row>
          <Row className="mt-2 justify-content-md-left" xs lg="3">
            <input
              type="text"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              placeholder="Enter Password"
            ></input>
          </Row>
          <Row className="mt-2 justify-content-md-left" lg="5">
            <Button onClick={handleLogin}>Login</Button>
          </Row>
          {loginToken === undefined ? (
            <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
              <font color="red"> Incorrect Email or Password!!</font>
            </Row>
          ) : (
            <Display />
          )}
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  newUser: state.regisrtation,
  loginData: state.loginReducer,
});

const mapDispatchToProps = { registerUser, loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
