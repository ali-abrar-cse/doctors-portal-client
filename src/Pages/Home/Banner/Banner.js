import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Banner = () => {
  const backgroundBanner = {
    background: `url(${bg})`,
  };
  const verticleCenter = {
    display: "flex",
    alignItems: "center",
    height: "500px",
  };

  return (
    <Box style={backgroundBanner}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={verticleCenter} textAlign="left">
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                sx={{ my: 3, fontSize: 14, color: "gray", fontWeight: 300 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                molestiae in eveniet quasi, ex, ipsum animi provident debitis ea
                aliquam ullam, facere tempore sed natus.
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#5CE7ED" }}
              >
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid style={verticleCenter} item xs={12} md={6}>
            <img width="80%" src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
