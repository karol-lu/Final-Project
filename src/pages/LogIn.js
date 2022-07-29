import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { logInUser } from "../services/authService";
import { PATHS } from "../utils/paths";
import { TextInput, Button, Container, PasswordInput } from "@mantine/core";
import { checkAuthUser } from "../services/authService";
import { Lock, At } from "tabler-icons-react";

const initialValues = {
  email: "",
  password: "",
};

export const LogIn = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate(PATHS.homepage);
  };

  const handleValueChange = (name) => (event) => {
    setValues((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logInUser({ ...values, handleSuccess });
  };

  useEffect(() => {
    checkAuthUser({ handleSuccess });
  }, []);

  return (
    <Container size="xs" px="xs">
      <Wrapper>
        <LoginBox>
          <form onSubmit={handleSubmit}>
            <TextInput
              placeholder="e-mail"
              label="Email"
              icon={<At />}
              value={values.email}
              onChange={handleValueChange("email")}
            />
            <PasswordInput
              style={{ marginTop: "10px" }}
              placeholder="password"
              label="Password"
              value={values.password}
              onChange={handleValueChange("password")}
              required
              icon={<Lock size={16} />}
            />
            <Button style={{ marginTop: "20px" }} type="submit">
              Sign in
            </Button>
          </form>
        </LoginBox>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 5px;
  width: 100%;
  max-width: 400px;

  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;
