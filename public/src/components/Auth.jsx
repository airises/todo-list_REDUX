import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActionTypes } from "../store/auth/authReducer";

const Auth = () => {
  const dispatch = useDispatch();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPAsswordValid] = useState(true);
  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      navigate("/header/todolist");
      dispatch({
        type: authActionTypes.LOG_IN,
        payload: formState.email,
      });
    }
    setState({
      email: "",
      password: "",
    });
  };
  const validateEmailHandler = () => {
    setEmailValid(formState.email.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPAsswordValid(formState.password.trim().length > 5);
  };
  return (
    <Main>
      <section>
        <form onSubmit={submitHandler}>
          <Container>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={inputChangeHandler("email")}
              onBlur={validateEmailHandler}
            />
            {isEmailValid === false ? (
              <p>"Please insert a valid email address"</p>
            ) : null}
          </Container>
          <Container>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formState.password}
              onChange={inputChangeHandler("password")}
              autoComplete="password"
              onBlur={validatePasswordHandler}
            />
            {isPasswordValid === false ? (
              <p>"Password must not be shorter than 5"</p>
            ) : null}
          </Container>
          <StyledButton>Login</StyledButton>
        </form>
      </section>
    </Main>
  );
};

export default Auth;

const Main = styled.main`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  background-color: #f4f0fa;
`;
const Container = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    color: #616161;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-size: 20px;
  }
  input {
    display: block;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    padding: 0.25rem;
    border: 1px solid #ccc;
    padding: 10px;
  }
  p {
    color: red;
    display: flex;
    align-items: flex-start;
    margin-left: 30px;
  }
`;

const StyledButton = styled.button`
  font-size: 1.25rem;
  background-color: #008cff;
  padding: 0.5rem 2.5rem;
  box-shadow: 5px 5px 5px #ff0095;
  border-radius: 20px;
  border: none;
  color: #2c2922;
  margin-top: 10px;
  margin-bottom: 10px;
  :hover {
    background-color: #84ff00;
  }
`;
