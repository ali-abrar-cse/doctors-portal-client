import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Container>
      <Box sx={{py: 5, pt: 8}}>
      <Typography textAlign="left" sx={{ color: "info.main", fontWeight: "bold" }} variant="h6">
        TESTIMONIAL
      </Typography>
      <Typography textAlign="left" variant="h4">What's Our Patients <br /> Says</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{p:3}}>
            <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis earum, porro minima beatae nam illum, consectetur, voluptate enim harum mollitia rem repellendus recusandae in. Nobis dolore accusamus in non, vero odio? Repellendus modi ipsum quo esse aliquam excepturi quos!
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyContent:"center", py: 2}}>
              <img width="50px" src={people1} alt="" />
              <Box textAlign="left" sx={{pl: 1}}>
              <Typography variant="h6" sx={{ color: "info.main", fontSize: 15, fontWeight:"bold" }}>
                William Hery
              </Typography>
              <Typography variant="h6" sx={{ color: "GrayText.secondary", fontWeight:300, fontSize:14 }}>
                California
              </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{p:3}}>
            <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi necessitatibus eligendi mollitia quod hic itaque possimus aliquam quis id error, minus iure quaerat adipisci, animi praesentium aperiam provident ratione, molestias harum rem labore! Nobis magni cumque ratione quam distinctio.
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyContent:"center", py:2}}>
              <img width="50px" src={people2} alt="" />
              <Box textAlign="left" sx={{pl: 1}}>
              <Typography variant="h6" sx={{ color: "info.main", fontSize: 15, fontWeight:"bold" }}>
                William Hery
              </Typography>
              <Typography variant="h6" sx={{ color: "GrayText.secondary", fontWeight:300, fontSize:14 }}>
                California
              </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{p: 3}}>
            <Typography variant="h6" sx={{ fontSize: 14, fontWeight: 300 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas explicabo temporibus facere aliquam quos, blanditiis aperiam deleniti quidem eligendi perspiciatis officia iste voluptatibus vel optio inventore, ipsum unde tenetur saepe consectetur dicta praesentium illum. Autem ad minima molestias iure! Eos!
            </Typography>
            <Box sx={{display: "flex", alignItems: "center", justifyContent:"center", py: 2}}>
            <img width="50px" src={people3} alt="" />
              <Box textAlign="left" sx={{pl: 1}}>
              <Typography variant="h6" sx={{ color: "info.main", fontSize: 15, fontWeight:"bold" }}>
                William Hery
              </Typography>
              <Typography variant="h6" sx={{ color: "GrayText.secondary", fontWeight:300, fontSize:14 }}>
                California
              </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
