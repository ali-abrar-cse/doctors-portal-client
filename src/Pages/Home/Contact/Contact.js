import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import bg from "../../../images/appointment-bg.png";

const Contact = () => {
  const setbg = {
    background: `url(${bg})`,
    height: "80%",
    width: "100%",
    backgroundColor: "rgba(43, 44, 59, 0.85)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: "100px",
    color: "white",
  };
  return (
    <Container sx={{ p: 5 }} style={setbg}>
      <Typography sx={{ color: "info.main" }} variant="h6">
        CONTACT US
      </Typography>
      <Typography variant="h4">Always Connect With Us</Typography>
      <form action="">
        <TextField
        style={{backgroundColor: "white"}}
          sx={{ width: "60%", mt: 1 }}
          id="outlined-basic"
          defaultValue="Your Name"
         
        />
        <TextField
        style={{backgroundColor: "white"}}
        sx={{ width: "60%", my: 4 }}
          id="outlined-textarea"
          defaultValue="Your Email"
          multiline
        />
        <TextField
          style={{width: "60%", backgroundColor: "white" }}
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Your Message"
        />
        <br />
        <Button sx={{my: 2}} variant="contained" >SUBMIT</Button>
      </form>
    </Container>
  );
};

export default Contact;
