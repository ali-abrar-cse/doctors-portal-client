import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { email, password } = loginData;
  const { loginUser, isLoading, authError, user, googleSignin } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value);
  };

  const handleGoogleSignin = (e) => {
    googleSignin(history, location);
  };

  const handleOnSubmit = (e) => {
    loginUser(email, password, history, location);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1">Login</Typography>
          {!isLoading && (
            <form onSubmit={handleOnSubmit} action="">
              <TextField
                id="standard-basic"
                name="email"
                label="Your Email"
                onBlur={handleOnChange}
                variant="standard"
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                name="password"
                sx={{ width: "75%", m: 1 }}
                label="Your Password"
                onBlur={handleOnChange}
                variant="standard"
                type="password"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "75%", m: 1 }}
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register.</Button>
              </NavLink>
            </form>
          )}
          <p>-------------------------------</p>
          <Button onClick={handleGoogleSignin} variant="contained">
            Google Signin
          </Button>
          {isLoading && <CircularProgress />}
          {authError && <Alert severity="error">{authError}</Alert>}
          {user?.email && (
            <Alert severity="success">Logged in Successfully!</Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
