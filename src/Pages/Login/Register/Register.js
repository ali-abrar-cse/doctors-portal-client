import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { email, password, name } = loginData;
  const { registerUser, isLoading, authError, user } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleOnSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password didn't matched");
      return;
    }

    registerUser(email, password, name, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1">Register</Typography>
          {!isLoading && (
            <form onSubmit={handleOnSubmit} action="">
              <TextField
                id="standard-basic"
                name="name"
                label="Your Name"
                onBlur={handleOnBlur}
                variant="standard"
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                name="email"
                label="Your Email"
                onBlur={handleOnBlur}
                variant="standard"
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                name="password"
                sx={{ width: "75%", m: 1 }}
                label="Your Password"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
              />
              <TextField
                id="standard-basic"
                name="password2"
                sx={{ width: "75%", m: 1 }}
                label="Re-Type Your Password"
                onBlur={handleOnBlur}
                variant="standard"
                type="password"
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "75%", m: 1 }}
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">
                  Already Registered? Please Login.
                </Button>
              </NavLink>
            </form>
          )}
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

export default Register;
